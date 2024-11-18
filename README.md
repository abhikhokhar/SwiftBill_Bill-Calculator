# SwiftBill_Bill-Calculator
Project Overview:

This project is a simple web-based billing system that allows users to add items to their shopping basket, calculate the total, and view the final summary. The system takes the item name, price, and quantity as input, calculates the total for each item, and displays a summary of all items along with the grand total. The data is also stored in the browser's local storage for future reference.

Features:

Add items: Users can input item details (name, price, and quantity) to add them to the basket.
Calculate total: The total for each item and the grand total is automatically calculated.
View Summary: A summary page displays the complete list of items and the grand total.
Local Storage: All the billing data (items and total) are saved in the browser's local storage.

How to Use:
1. Adding Items to Basket
Navigate to the Billing Form section.
Enter the item name, price, and quantity.
Click the Add Item button to add the item to your basket.
Screenshot: Add Item Form

2. Calculating the Total
After adding the items, click on the Calculate Bill button to display the grand total of the items in your basket.
The Total Amount Due will be shown at the bottom.
Screenshot: Total Calculation

![image](https://github.com/user-attachments/assets/0ee21270-041f-488c-8aeb-c46d70cdee21)


4. Viewing the Basket Summary
Once you've added all items, click the View Summary button to navigate to the basket summary page.
The View Summary button will be activated once items are added to the basket.
Screenshot: Summary Page

![image](https://github.com/user-attachments/assets/adacf617-5204-4a47-b965-69e2631e6304)


Functionality:

Billing Form: The form captures the item name, price, and quantity. When the form is submitted, the item is added to the table, and the grand total is updated automatically.
Calculate Bill: When the Calculate Bill button is clicked, the grand total is displayed at the bottom of the page, and the data is stored in the browser's local storage.
View Summary: The View Summary button redirects to the billing-summary.html page, where the details of the items and the total are displayed. The button is enabled after the user has added at least one item to the basket.

Local Storage
The project uses localStorage to store billing data so that users can continue where they left off if the page is reloaded. The data is saved as a JSON object containing the items and the grand total.

Technologies Used:

HTML: For the structure of the webpage.
TailwindCSS: For styling the webpage and making it visually appealing.
JavaScript: For handling the functionality, including form submissions, total calculations, and local storage operations.

Future Improvements:

Add validation to ensure that only valid data is entered (e.g., prices and quantities must be positive numbers).
Allow users to edit or delete items from the basket.
Improve the user interface for better user experience.
Allow users to export the billing details as a PDF or CSV file.

Contributing

Feel free to fork the project and make improvements. If you'd like to contribute, please open a pull request with your changes.



