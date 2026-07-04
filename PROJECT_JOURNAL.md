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