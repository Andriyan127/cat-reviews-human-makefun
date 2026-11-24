# Test

## How it was verified

1. Ran the program with Node v24.22.1 (no dependencies, no build step):

   ```sh
   node main.ts
   ```

2. Checked the output file contains exactly the winning line:

   ```sh
   cat /output/entry.txt
   wc -c /output/entry.txt   # 124
   ```

   Expected output (one line, no trailing newline):

   ```
   One star. He bought a laptop for work, then yelled when I sat on the keyboard. I was helping. The spreadsheet is better now.
   ```

3. Gate checks, all passed:
   - File is UTF-8 text, 124 characters (within the 1–200 gate), not only whitespace.
   - Single line — no newline characters anywhere in the file.
   - No trailing newline — `wc -c` equals the character count (124), confirming the file ends with the final `.` and not a newline.
   - `MAKEFUN_OUTPUT_DIR` is respected: the program writes to `$MAKEFUN_OUTPUT_DIR/entry.txt` when set, `/output/entry.txt` otherwise.
