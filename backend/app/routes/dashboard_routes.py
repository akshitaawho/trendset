from fastapi import APIRouter

from app.services import analytics_service

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)


@router.get("/")
def dashboard_home():
    return {
        "message": "TrendSet Dashboard API"
    }


@router.get("/monthly-sales")
def monthly_sales():
    return analytics_service.get_monthly_sales()


@router.get("/category-sales")
def category_sales():
    return analytics_service.get_category_sales()

@router.get("/country-sales")
def country_sales():
    return analytics_service.get_country_sales()

@router.get("/top-products")
def top_products():
    return analytics_service.get_top_products_by_profit()

@router.get("/overview")
def overview():
    return analytics_service.get_dashboard_overview()