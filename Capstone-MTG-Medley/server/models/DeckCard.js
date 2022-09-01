import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const DeckCardSchema = new Schema(
  {
    id: { type: String, required: true},
    cardId: { type: Schema.Types.ObjectId, required: true, ref: 'Card'},
    deckId: { type: Schema.Types.ObjectId, required: true, ref: 'Deck'},
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

DeckCardSchema.virtual('card', {
  localField: 'cardId',
  foreignField: '_id',
  justOne: true,
  ref: 'Card'
})

DeckCardSchema.virtual('deck', {
  localField: 'deckId',
  foreignField: '_id',
  justOne: true,
  ref: 'Deck'
})