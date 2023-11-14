// pages/api/upload.ts
import { NextRequest, NextResponse } from 'next/server';
import multer from 'multer';


export async function POST(req: NextRequest) {
  const data = {
    filename: {
      Address:
        'VIII Ba Tháng Hai 3-3CH Đường Ba Tháng Hai, Phường 11, Quận 1 10, mpl HOM',
      Seller: 'VinCommerce',
      Timestamp: 'Ngày l bán: 1 21/07/2019 14:68',
      Total_Cost: 'TỔNG TIỀN PHẢI T TOÁN 788 088',
    },
    image: 'encoded64', // Replace with your actual base64-encoded image
  };
 
  return Response.json(JSON.stringify(data))
}