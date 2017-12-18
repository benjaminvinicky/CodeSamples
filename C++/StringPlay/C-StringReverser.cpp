/******************************************************************************
* Bellevue Class: PROG 113
*           Term: Spring 2015
*     Instructor: Robert Main
*
* Solution/Project Name: VinickyProject6
*             File Name: C-StringReverser.cpp
*
* This file defines the entry point method, main(), for a C++ Console
* application. When the executable file is selected for execution, the OS
* will transfer execution to the first line of code in method main(). Other
* methods called from main() may be defined here as well.
*
* Programmer: Benjamin Vinicky
* Assigned Project: 6
*
* Revision     Date                        Release Comment
* --------  ----------  ------------------------------------------------------
*   1.0     05/15/2015  Initial Release
*
* File Methods
* ------------
*     Name                             Description
* ------------  --------------------------------------------------------------
* main          Program entry point method
* printReverse  Client Recursive method: Display a C-Style string in reverse
*               order.
* printReverse  Actual Recursive method: Display a C-Style string in reverse
*               order, starting at a specific character in the C-String array.
*
*
* User Defined Types (UDTs) Utilized
* ----------------------------------
* None
*
*
* Program Inputs
* --------------
*     Data Type                             Description
* ----------------  ----------------------------------------------------------
* Console Keyboard  User's phrase to display in reverse
*
*
* Program Outputs
* ---------------
*    Data Type                             Description
* ---------------  -----------------------------------------------------------
* Console Monitor  User's phrase displayed in reverse order
*
******************************************************************************
*/
// External Definition files
// The first inclusion file MUST always be declared and MUST be first in the list
#include "stdafx.h"  // Defines IDE required external definition files

#include <iostream>  // Defines objects and classes used for stream I/O

// Namespaces utilized in this program
using namespace std; // Announces to the compiler that members of the namespace
                     // "std" are utilized in this program

// Method Prototype Declarations
// -----------------------------
void printReverse(const char* s);
void printReverse(const char* s, int index);


/******************************************************************************
* Method: main()
* 
* Method Description
* ------------------
* 
*
* Pre-Conditions
* --------------
*
*
* Method Arguments
* ----------------
*   Type        Name                        Description
* --------  -------------  ---------------------------------------------------
* None
* 
* Return Value
* ------------
* Type                              Description
* ----  ----------------------------------------------------------------------
* void  The method RETurns no value
*
*
* Invoked Methods
* ---------------
*     Name                            Description
* ------------  --------------------------------------------------------------
* printReverse  Client Recursive method: Display a C-Style string in reverse
*               order.
*
******************************************************************************
*/
int main()          
{
	// Constant "const" Value Declaration
	const int NO_ERRORS = 0;
	const int MAX_LENGTH = 80;

	// Uninitialized Array Declaration
	char str[MAX_LENGTH + 1];

	// Initialized Variable Declaration
	int programStatus = NO_ERRORS;  // Assume no program execution errors


	cout << "Enter a string: " ;
	cin.getline(str, MAX_LENGTH);

	cout << "The reversed string is :\n";
	// Start the recursion at the first character in the array
	printReverse(str);


	// This prevents the Console Window from closing during debug mode
	// Note: Generally, you should not remove this code
	cin.ignore(cin.rdbuf()->in_avail());
	cout << "\nPress only the 'Enter' key to exit program: ";
	cin.get();

	return programStatus;

}	// End method: main()


/******************************************************************************
* Method: printReverse(const char*)
* 
* Method Description
* ------------------
* Takes a pointer to a c-string and using pointer notation, prints the c-string's
* last letter, and passes the function recursively to its overloaded method.
*
* Pre-Conditions
* --------------
*
*
* Method Arguments
* ----------------
*   Type        Name                        Description
* --------  -------------  ---------------------------------------------------
* 
* 
* Return Value
* ------------
* Type                              Description
* ----  ----------------------------------------------------------------------
* void  The method RETurns no value
*
*
* Invoked Methods
* ---------------
*     Name                            Description
* ------------  --------------------------------------------------------------
* printReverse  Actual Recursive method: Display a C-Style string in reverse
*               order, starting at a specific character in the C-String array.
*
******************************************************************************
*/
void printReverse(const char* phrase)
{
	int i = 0;
	i = strlen(phrase) -1;
	cout << *(phrase + i);
	printReverse(phrase, i);
}	// End method: printReverse(char*)


/******************************************************************************
 * Method: printReverse(char*, int)
 * 
 * Method Description
 * ------------------
 * this method is the same as the former, but passing the i variable as index
 * and recursively setting it lower and lower, iterating through the c-string using
 * pointer notation until it reaches zero or less(somehow) and then breaks out.
 *
 * Pre-Conditions
 * --------------
 *
 *
 * Method Arguments
 * ----------------
 *   Type        Name                        Description
 * --------  -------------  ---------------------------------------------------
 * 
 * 
 * Return Value
 * ------------
 * Type                              Description
 * ----  ----------------------------------------------------------------------
 * void  The method RETurns no value
 *
 *
 * Invoked Methods
 * ---------------
 * None
 *
 ******************************************************************************
 */
void printReverse(const char* phrase, int index)
{
	index--;
	if (index > 0)
	{
		cout << *(phrase + index);
	}
	else if (index == 0)
	{
		cout << *(phrase + index) << endl;
	}
	else
	{
		return;
	}
	printReverse(phrase, index);
}	// End method: printReverse(char*, int)