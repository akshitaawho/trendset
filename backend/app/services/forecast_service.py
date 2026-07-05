import pandas as pd
from prophet import Prophet

from app.data_loader import load_dataset

model = None
last_date = None


def get_forecast(days: int = 30):
    global model

    df = load_dataset().copy()

    df["Date"] = pd.to_datetime(df["Date"])

    daily_sales = (
        df.groupby("Date")["Invoice Total"]
        .sum()
        .reset_index()
    )

    daily_sales.columns = ["ds", "y"]

    if model is None:
        model = Prophet()
        model.fit(daily_sales)

    future = model.make_future_dataframe(periods=days)

    forecast = model.predict(future)

    result = forecast[["ds", "yhat"]].tail(days)

    return {
        "forecast": [
            {
                "date": row["ds"].strftime("%Y-%m-%d"),
                "predicted_revenue": round(row["yhat"], 2),
            }
            for _, row in result.iterrows()
        ]
    }