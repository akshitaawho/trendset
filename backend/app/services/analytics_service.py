from app.data_loader import load_dataset

def get_monthly_sales():
    """
    Calculate total revenue for each month.
    """
    df = load_dataset()

    monthly_sales = (
        df.groupby("Month Name")["Line Total"]
        .sum()
        .reindex([
            "January", "February", "March",
            "April", "May", "June",
            "July", "August", "September",
            "October", "November", "December"
        ])
    )

    return monthly_sales.fillna(0).to_dict()


def get_category_sales():
    df = load_dataset()

    category_sales = (
        df.groupby("Category")["Line Total"]
        .sum()
        .sort_values(ascending=False)
    )

    return category_sales.to_dict()


def get_country_sales():
    df = load_dataset()

    country_sales = (
        df.groupby("Country")["Line Total"]
        .sum()
        .sort_values(ascending=False)
    )

    return country_sales.to_dict()


def get_top_products_by_profit():
    df = load_dataset()

    top_products = (
        df.groupby("Product ID")["Profit"]
        .sum()
        .sort_values(ascending=False)
        .head(10)
    )

    return top_products.to_dict()

def get_dashboard_overview(country=None, category=None):

    df = load_dataset().copy()

    if country:
        df = df[df["Country"] == country]

    if category:
        df = df[df["Category"] == category]

    return {
        "kpis": {
            "revenue": round(df["Line Total"].sum(), 2),
            "profit": round(df["Profit"].sum(), 2),
            "transactions": len(df),
            "products": df["Product ID"].nunique(),
            "countries": df["Country"].nunique(),
        },

        "monthly_sales": (
            df.groupby("Month Name")["Line Total"]
            .sum()
            .reindex([
                "January","February","March","April","May","June",
                "July","August","September","October","November","December"
            ])
            .fillna(0)
            .to_dict()
        ),

        "category_sales": (
            df.groupby("Category")["Line Total"]
            .sum()
            .sort_values(ascending=False)
            .to_dict()
        ),

        "country_sales": (
            df.groupby("Country")["Line Total"]
            .sum()
            .sort_values(ascending=False)
            .to_dict()
        ),

        "top_products": (
            df.groupby("Product ID")["Profit"]
            .sum()
            .sort_values(ascending=False)
            .head(10)
            .to_dict()
        ),
    }

def get_filters():
    df = load_dataset()

    return {
        "countries": sorted(df["Country"].dropna().unique().tolist()),
        "categories": sorted(df["Category"].dropna().unique().tolist()),
    }