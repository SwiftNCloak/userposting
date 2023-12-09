import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
  } catch (error){
    console.log("ERROR CREATING TASK: ", error);
    return NextResponse.json({error: "Error creating task", status: 500});
  }
}

export async function GET(req: Request) {
    try {
    } catch (error){
      console.log("ERROR GETTING TASK: ", error);
      return NextResponse.json({error: "Error creating task", status: 500});
    }
  }

export async function PUT(req: Request) {
  try {
  } catch (error){
    console.log("ERROR UPDATING TASK: ", error);
    return NextResponse.json({error: "Error creating task", status: 500});
  }
}

export async function DELETE(req: Request) {
    try {
    } catch (error){
      console.log("ERROR DELETING TASK: ", error);
      return NextResponse.json({error: "Error deleting task", status: 500});
    }
  }
  