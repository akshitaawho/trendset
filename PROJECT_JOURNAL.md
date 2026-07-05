# TrendSet Development Journal

## Day 1 - Planning

### Completed
- Created GitHub repository
- Initialized Git repository
- Created project structure
- Selected dataset
- Reviewed dataset schema
- Finalized MVP features
- Finalized dashboard UI
- Selected design language (Apple × Nike)
- Chosen dark theme
- Selected accent color (#FF856D)

### Decisions
- React + TypeScript frontend
- FastAPI backend
- AWS deployment
- 30-day demand forecasting
- Dark theme only
- Premium enterprise UI

### Next
- Exploratory Data Analysis (EDA)
- Data cleaning
- Forecasting strategy

## Day 2 - Data Preprocessing

### Completed
- Loaded all datasets into Pandas
- Explored dataset dimensions and schema
- Performed data quality assessment
- Checked missing values
- Checked duplicate records
- Merged Transactions with Products
- Merged Transactions with Stores
- Verified merged dataset integrity
- Removed duplicate rows
- Converted Date column to datetime
- Created time-based features (Year, Month, Month Name, Day, Weekday, Quarter)
- Engineered Profit feature
- Saved cleaned dataset as `data/processed/master_dataset.csv`

### Key Findings
- Transactions is the primary fact table.
- Products and Stores successfully enrich transaction records.
- Duplicate rows existed only in Transactions (798 removed).
- Missing values mainly occur in optional fields such as Color and Size.
- Final master dataset contains cleaned, merged records ready for analytics.

### Output
- `data/processed/master_dataset.csv`

### Next
- Exploratory Data Analysis (visualizations)
- Sales trend analysis
- Category and country analytics
- Prepare forecasting dataset

## Day 3 - Exploratory Data Analysis

### Completed
- Created EDA notebook
- Loaded processed master dataset
- Explored merged dataset structure
- Analyzed monthly revenue trends
- Analyzed revenue by product category
- Analyzed revenue by country
- Identified top profitable products
- Analyzed weekday sales patterns
- Analyzed payment methods
- Visualized profit distribution
- Generated feature correlation matrix
- Documented business insights

### Key Insights
- Weekend sales outperform weekdays.
- Credit Card is the dominant payment method.
- Female and Masculine categories generate the highest revenue.
- Revenue peaks toward the end of the year.
- Dataset is ready for forecasting and dashboard development.

### Next
- Build FastAPI backend
- Create REST API endpoints
- Connect backend to processed dataset
- Prepare API for React dashboard

## Day 4 - Backend API Development

### Completed
- Created FastAPI backend structure
- Organized backend into routes and services
- Implemented dataset loader with caching
- Built analytics service for business logic
- Developed dashboard API endpoints
- Implemented overview endpoint for dashboard data
- Verified API responses locally

### Key Decisions
- Kept `main.py` minimal and focused on application setup.
- Separated routing from business logic using a service layer.
- Cached the dataset to avoid repeated disk reads.
- Consolidated dashboard KPIs into a single overview endpoint.

### Next
- Build the React frontend
- Connect the frontend to the FastAPI backend
- Display live analytics from the API

## Day 5 - Interactive Dashboard & Forecasting

### Completed
- Added country and category filters to the dashboard
- Updated backend to support filtered analytics
- Created filters API endpoint
- Connected frontend filters to backend
- Enabled dynamic dashboard updates without page refresh
- Built demand forecasting notebook using Prophet
- Prepared daily revenue time series
- Trained 30-day forecasting model
- Created forecasting API endpoint
- Integrated forecast chart into the dashboard
- Added loading skeleton for improved user experience

### Key Decisions
- Used Prophet for time-series forecasting due to strong seasonality in sales data.
- Aggregated transaction data into daily revenue before forecasting.
- Kept forecasting as a separate backend service.
- Implemented client-side data fetching for interactive filtering.

### Next
- Improve forecast performance
- Add forecast period selector (7 / 30 / 90 days)
- Polish dashboard UI
- Deploy frontend and backend
- Write project documentation