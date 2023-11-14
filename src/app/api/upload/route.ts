// pages/api/upload.ts
import { NextRequest, NextResponse } from 'next/server';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

export async function POST(req: NextRequest) {
  const imageUrl = 'http://localhost:3000/nftft.png';

  // Convert the image from URL to base64
  const encodedImage = await getImageFromUrlAsBase64(imageUrl);
  const data = {
    filename: {
      Address:
        'VIII Ba Tháng Hai 3-3CH Đường Ba Tháng Hai, Phường 11, Quận 1 10, mpl HOM',
      Seller: 'VinCommerce',
      Timestamp: 'Ngày l bán: 1 21/07/2019 14:68',
      Total_Cost: 'TỔNG TIỀN PHẢI T TOÁN 788 088',
    },
    image: encodedImage, // Replace with your actual base64-encoded image
  };
 
  return Response.json(data)
}

async function getImageFromUrlAsBase64(imageUrl: string): Promise<string> {
  const response = await fetch(imageUrl);
  const buffer = await response.arrayBuffer();
  const base64 = Buffer.from(buffer).toString('base64');
  return base64;
}