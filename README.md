# TrendSet

> Predict demand. Optimize inventory. Drive smarter retail decisions.

TrendSet is a full-stack fashion retail analytics platform that helps retailers analyze historical sales, forecast future demand, and make data-driven inventory decisions.

This project combines data engineering, machine learning, backend APIs, cloud deployment, and an interactive analytics dashboard.

---

## Features

- Interactive retail analytics dashboard
- Demand forecasting for the next 30 days
- Sales trend analysis
- Category performance analysis
- Regional sales insights
- Inventory recommendations
- Business insights
- AWS cloud deployment

---

## Tech Stack

### Frontend
- React
- TypeScript
- Tailwind CSS
- Recharts

### Backend
- FastAPI
- Python

### Machine Learning
- Pandas
- NumPy
- Scikit-learn
- Statsmodels (if required)

### Cloud
- AWS S3
- AWS Lambda
- API Gateway
- AWS Amplify

---

## Project Structure

```text
trendset/

├── backend/
├── frontend/
├── data/
│   ├── raw/
│   ├── processed/
│   └── outputs/
│
├── docs/
│   ├── api/
│   ├── diagrams/
│   ├── screenshots/
│   └── ui/
│
├── scripts/
│   ├── 01_data_preprocessing.ipynb
│
├── tests/
│
├── PROJECT_JOURNAL.md
├── README.md
├── requirements.txt
└── .gitignore
```

---

## Dataset

This project uses the **Global Fashion Retail Sales** dataset from Kaggle.

The dataset is **not included** in this repository because of GitHub's file size limits.

Place the CSV files inside:

```text
data/raw/
```

Required files:

- customers.csv
- discounts.csv
- employees.csv
- products.csv
- stores.csv
- transactions.csv

---

## Current Progress

- [x] Project planning
- [x] Dataset selection
- [x] Data preprocessing
- [x] Data quality assessment
- [x] Feature engineering
- [ ] Exploratory Data Analysis
- [ ] Forecasting model
- [ ] FastAPI backend
- [ ] React frontend
- [ ] AWS deployment

---

## Roadmap

Day 1
- Planning
- Repository setup
- UI design

Day 2
- Data preprocessing
- Feature engineering

Day 3
- Exploratory Data Analysis
- Visualizations

Day 4
- Forecasting model

Day 5
- Backend API

Day 6
- React dashboard

Day 7
- AWS deployment

Day 8
- Testing and polishing

Day 9
- Documentation

Day 10
- Final improvements

---

## Future Improvements

- AI-generated business insights
- Scenario simulator
- Interactive map visualizations
- PDF report export
- Dark mode enhancements

---

## Author

Akshitaa Sahoo