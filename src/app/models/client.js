import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    country: { type: String, required: true },
    profileImage: { type: String },  // URL or file path to the profile image
    companyName: { type: String },  // Optional: Store company name
    companyRole: { type: String },  // Optional: Store company role
    termsAccepted: { type: Boolean, required: true },  // Boolean flag for terms acceptance
  },
  { timestamps: true }  // Adds `createdAt` and `updatedAt` timestamps
);

const Client = mongoose.models.Client || mongoose.model('Client', clientSchema);

export default Client;
