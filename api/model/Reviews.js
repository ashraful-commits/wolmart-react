import mongoose from "mongoose";

//======================create schema
const ReviewsSchema = mongoose.Schema(
  {
    rating: {
      type: Number,
      required:true,
      default:0
    },
  
    review: {
      type: Number,
      required:true,
      default:0
    },
    // customer: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref:"Customer"
      
    // },
    status:{
        type:Boolean,
        default:true,
    },
    trash:{
        type:Boolean,
        default:false
    }
  
  },
  { timestamps: true }
);

//========================product model
export const ReviewsModel = mongoose.model("Reviews", ReviewsSchema);
