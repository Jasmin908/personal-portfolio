            DateTime day = new DateTime(currentMonth.Year, currentMonth.Month, 1);

   
    while (day.DayOfWeek != DayOfWeek.Monday) // loops while day != monday
    {
        day = day.AddDays(1); // always add one more day
    }

    while (day.Month == currentMonth.Month) // loops while the day is in current month
    {
        int week = System.Globalization.ISOWeek.GetWeekOfYear(day); // gets calendar week 

        string weekFolder =
            monthFolder + "\\" + "_KW" + week; // creates week folder path 

        Directory.CreateDirectory(weekFolder); // creates week folder 

        DateTime currentDay = day; // asigns value from the variable day to currentDay

        for (int d = 0; d < 5; d++) // loops from monday to friday only 
        {
            if (currentDay.Month != currentMonth.Month) // if statment when the current day is not in the current month anymore 
            {
                break; // breaks loop 
            }

            string content = // creates the content of the note files
                template
                    .Replace("{DATE}", currentDay.ToString("dd.MM.yyyy")) // replaces placeholders with actual information(example: 16.06.2026)
                    .Replace("{DAY}", currentDay.ToString("dddd"));

            string fileName = // creates the filename
                currentDay.ToString("yyyy.MM.dd") + ".md"; // output example: 2026.06.16.md

            string filePath = // creates file path 
                weekFolder + "\\" + fileName; // output example:C:\Planning_2026_06_June_KW23\2026.06.16.md

            if (!File.Exists(filePath)) // checks if the file actually already exists
            {
                File.WriteAllText(filePath, content); // creates file
                Console.WriteLine("Created: " + fileName); // prints conformation 
            }

            currentDay = currentDay.AddDays(1); // goes to the next day 
        }

        day = day.AddDays(7); // goes to the next monday 
    }
