from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.dashboard_routes import router as dashboard_router

app = FastAPI(
    title="TrendSet API",
    description="Backend API for TrendSet",
    version="1.0.0"
)

app.include_router(dashboard_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {
        "message": "Welcome to the TrendSet API"
    }