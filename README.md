# Weather-Weather

## Decription

This JavaScript Code Emil Work Day Scheduler.  You will be given 9 per hour time slot to enter your schedule for specific time hour.  Click the "save" button on the right to save. Your saved schedules will be save until you delete them.  Deleting the content requires you to hit the "save" button too.  Each hour are designated with a background.  Gray for the past hour, Red for the current hour and green to the future hour.  I hope you enjoy this project. Good luck and have fun!

Here is the link to my game.  Feel free to share with your friends and family.

[https://emil1577.github.io/Emil-Work-Day-Scheduler](https://emil1577.github.io/Emil-Work-Day-Scheduler/)


## Table Of Contents

1: [Webpage Screenshot](https://github.com/Emil1577/Emil-Weather-Weather/blob/main/README.md#webpage-screenshots)
2: [Code Snippets](https://github.com/Emil1577/Emil-Weather-Weather/blob/main/README.md#code-snippets)
3: [How to use:](https://github.com/Emil1577/Emil-Weather-Weather/blob/main/README.md#how-to-use)
4: [My Contact Information](https://github.com/Emil1577/Emil-Weather-Weather/blob/main/README.md#my-contact-information)

## Webpage Screenshots:

https://user-images.githubusercontent.com/119825000/211442665-6d07abd3-8231-4d08-98c5-f1cd2102f104.mov

## Code Snippets: 

### Function to set time

    function clockTick(){

      today = dayjs();
      $('#currentDay').text(today.format('MMM D, YYYY, h:mm:ss a'));

    }
    setInterval (clockTick, 1000);
    
### For loop and functions to activate button to store text values and get text values in the local storage.

    for (let i=9; i<18; i++) {

      var dayHr = i;
      var idHr ="#hour-" + dayHr;
      var saveButtonEl = document.querySelector(idHr);  
      var userTextInput = localStorage.getItem('Schedule '+i);

      document.querySelector("#text-"+i).textContent = userTextInput;

      saveButtonEl.addEventListener("click", function(event) {
        event.preventDefault();
        //assigned id "#text-x" to HTML
        var getHr = ("#text-"+i)
        var schedInput = $(getHr).val();

        localStorage.setItem('Schedule '+i,schedInput);

      }); 

### If function to compare the current hour with the hour in each schedule.  It also changes the color of each schedule.  Still using the For loops above.



### Edit the Index.html file, deleted the class on the "hour-x" Id and added class="text-x" on the textarea.

   

## How to use:

The link of the webpage is: https://emil1577.github.io/Emil-Work-Day-Scheduler

    Step 1 :Welcome homepage.
    Step 2 :Go to the alloted text area on which time you wanted to save a schedule.  Click on the "save" button to save.  Each schedule has it's own button.  Make sure you are hitting the corresponding button.
    Step 3 :To delete and edit the save schedule.  Go to the text area then edit or clear the text then hit the corresponding "save" button.  Even when you clear the text area, without hitting the "save" button, it will still not save.
    Step 4 :Each schedule will change it's color depending on the time.  If the hour past the background color will be gray, if present it will be red and for future it is green.
    Step 5 : You can go back to your schedule anytime.  It will only change when you make some changes.

## My Contact Information:

* [My LinkedIn](https://www.linkedin.com/in/emil-ronquillo-76832a32/)
* [My Github](https://github.com/Emil1577)
* [My Email](mailto:emilronquillo@gmail.com)

## Thank you for stopping by. 

Special thanks to all my Instructor, tutors and my colleagues
