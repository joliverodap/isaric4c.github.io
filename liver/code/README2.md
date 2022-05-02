---
layout: page
---

# AST_ALT_counter

This code takes data consisting of AST and ALT measurements for individuals, and produces a dataset consisting of monthly counts of total and elevated AST and ALT levels,
as well as a dataset consisting of the monthly mean and variances of total and elevated AST and ALT measurements. The file input.csv indicates the format the input data should be in.

To use: 

1. Replace the file `input.csv` with a new one containing your data. This file MUST have the following column headings: 
patient_id, DOB, sample_date, AST, ALT

It also must have one of: 
age, DOB

If age is included, it should be measured exactly in years, with one year equal to 365.25 days.

`input.csv` must not have a header - the first row should be these column headings

2. Double-click `WinPython Command Prompt`

3. In the black box that appears, type:  
cd ../  
And press Enter

4. Then type:  
python-3.9.10/python.exe process_data.py  
And press Enter  

5. File titled `summary_table.csv` and `stats_table` should appear. Check the contents, and then email them to us at [ccp@roslin.ed.ac.uk](mailto:ccp@roslin.ed.ac.uk)





