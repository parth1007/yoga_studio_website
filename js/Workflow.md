Workflow

CSV Reader
DataPreprocessing
--- ColumnFilter
--- Cleaning Monthly Income (Metanode)
----------- String to number
----------- Missing Value
----------- Auto-Binner
----------- Rule-based filter
----------- Column Filter
--- Cleaning Number Of Open Credit Lines And Loans
----------- Auto-Binner
----------- Rule-based filter
----------- Column Filter
--- RevolvingUtilizationOfUnsecuredLines
----------- Row filter
----------- Row filter
----------- Row Splitter
----------- Row Splitter
----------- Row Splitter
----------- Row Splitter
----------- Math Formula
----------- Math Formula
----------- Math Formula
----------- Math Formula
----------- Concatenate
----------- Concatenate
----------- Concatenate
----------- Constant Value Column
----------- Constant Value Column
--- Cleaning NumberOfDependents 
----------- String to number
----------- Rule Engine
--- Cleaning NumberOfTime30-59DaysPastDueNotWorse:
----------- Sorter
----------- Row Splitter
----------- Rule Engine
----------- String Manipulation
----------- Missing value
----------- Concat
----------- String To Number
--- Cleaning NumberOfTime60-89DaysPastDueNotWorse
-----------  same as previous
--- Cleaning NumberOfTime90DaysLate
-----------  same as previous
--- String to Number
---Number to String

Partitioning
SMOTE
Random Forest Learner
Random Forest Predictor
Model Write
Scorer