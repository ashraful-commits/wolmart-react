import mongoose from "mongoose";

//======================create schema
const productSchema = mongoose.Schema(
  {
  
    name: {
      type: String,
      trim: true,
      required:true
    },
    slug: {
      type: String,
      trim: true,
    },
    productType:{
      type:String,
      enum:["simple","variable","group","external"],
      default:"simple"
    },
    simpleProduct:{
     regularPrice:{
      type:Number,
      // required:true,
     },
     salePrice:{
      type:Number,
      // required:true,
     },
     productPhotos:{
      type:Array,
      
     },
     stock:{
      type:Number,
      default:0
     }


    },
    variableProduct:[
      { 
       colors:{
        type:String,
        default:null
      },
      size:{
        type:String,
        default:null
      },
      regularPrice:{
        type:Number,
        // required:true,
       },
       salePrice:{
        type:Number,
        // required:true,
       },
       productPhotos:{
        type:{String},
        // required:true,
       },
       stock:{
        type:Number,
        default:0
       }}
      ],
    groupProduct:[
      {name:{
        type:String,
        // required:true,
       },
       regularPrice:{
        type:Number,
        // required:true,
       },
       salePrice:{
        type:Number,
        // required:true,
       },
       productPhotos:{
        type:{String},
        required:true,
       },
       stock:{
        type:Number,
        default:0
       }}
    ],
    externalProduct:{
     
      regularPrice:{
        type:Number,
        // required:true,
       },
       salePrice:{
        type:Number,
        // required:true,
       },
       productPhotos:{
        type:{String},
        // required:true,
       },
       stock:{
        type:Number,
        default:0
       },
       link:{
        type:String,
        // required:true,
       }
    },
    status: {
      type: Boolean,
      trim: true,
    },
    photo: {
      type: String,
      trim: true,
      default: null,
    },
    gallery: {
      type: Array,
      trim: true,
    },
    longDesc: {
      type: String,
      trim: true,
    },
    shortDesc: {
      type: String,
      trim: true,
    },
    specification:{
      type:String,
      
    },
   
    sku:{
      type:String,
    },
    reviews:{
      type:[mongoose.Schema.Types.ObjectId],
      ref:"Reviews",
      default:null,
    },
    categories: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Category",
      
    },
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"Brand",
      
    },
    tags: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Tag",
    },
    status: {
      type: Boolean,
      default: false,
    },
    trash: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

//========================product model
export const ProductModel = mongoose.model("Product", productSchema);
