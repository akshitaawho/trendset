from fastapi import FastAPI

from app.routes.dashboard import router as dashboard_router

app = FastAPI(
    title="TrendSet API",
    description="Backend API for TrendSet",
    version="1.0.0"
)

app.include_router(dashboard_router)


@app.get("/")
def root():
    return {
        "message": "Welcome to the TrendSet API"
    }