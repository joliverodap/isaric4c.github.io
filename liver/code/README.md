---
title: README
---

# AST_ALT_counter

This code takes data consisting of AST and ALT measurements for individuals, and produces a dataset consisting of monthly counts of total and elevated AST and ALT levels. The file input.csv indicates the format the input data should be in.

To use: 

1. Replace the file `input.csv` with a new one containing your data, and these exact column headings: 
patient_id, DOB, sample_date, AST, ALT
`input.csv` must not have a header - the first row should have these column headings.

2. Double-click `WinPython Command Prompt`

3. In the black box that appears, type:
cd ../
And press Enter

4. Then type: 
python-3.9.10/python.exe process_data.py
And press Enter

5. A file titled `summary_table.csv` should appear. Check the contents, and then email that file to us at ccp@roslin.ed.ac.uk





