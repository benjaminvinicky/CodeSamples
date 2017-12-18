/*******************************************************************************
* Bellevue Class: PROG 113
*           Term: Spring 2015
*     Instructor: Robert Main
*
* Solution/Project Name: PROG113_Project6
*             File Name: stringReverser.cpp
*
* This file defines the entry point method, main(), for a C++ Console
* application. When the executable file is selected for execution, the OS
* will transfer execution to the first line of code in method main(). Other
* methods called from main() may be defined here as well.
*
* Programmer: ** Your Name Here **
* Assigned Project: 6
*
* Revision     Date                        Release Comment
* --------  ----------  --------------------------------------------------------
*   1.0     05/dd/2015  Initial Release
*
* File Methods
* ------------
*     Name                             Description
* ------------  ----------------------------------------------------------------
* main          Program entry point method
* printReverse  Client Recursive method: Display a "string" object in reverse
*               order.
* printReverse  Actual Recursive method: Display a "string" object in reverse
*               order, starting at a specific character in the "string" object.
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
* ----------------  ------------------------------------------------------------
* Console Keyboard  User's phrase to display in reverse
*
*
* Program Outputs
* ---------------
*    Data Type                             Description
* ---------------  -------------------------------------------------------------
* Console Monitor  User's phrase displayed in reverse order
*
********************************************************************************
*/
// External Definition files
// The first inclusion file MUST always be declared and MUST be first in the list
#include "stdafx.h"  // Defines IDE required external definition files

#include <iostream>  // Defines objects and classes used for stream I/O
#include <string>    // Defines class: string

// Namespaces utilized in this program
using namespace std; // Announces to the compiler that members of the namespace
                     // "std" are utilized in this program

// Method Prototype Declarations
// -----------------------------
void printReverse(string s);
void printReverse(string s, int index);


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
* --------  -------------  ----------------------------------------------------
* None
* 
* Return Value
* ------------
* Type                              Description
* ----  -----------------------------------------------------------------------
* void  The method RETurns no value
*
*
* Invoked Methods
* ---------------
*     Name                            Description
* ------------  --------------------------------------------------------------
* printReverse  Client Recursive method: Display a C-Style "string" object in
*               reverse order.
*
*******************************************************************************
*/
int main()          
{
	// Constant "const" Value Declaration
	 const int NO_ERRORS = 0;

	// Initialized Object Declaration
	string str;

	// Initialized Variable Declaration
	int programStatus = NO_ERRORS;  // Assume no program execution errors


	cout << "Enter a string: " ;
	getline(cin, str);

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


/*******************************************************************************
* Method: printReverse(string)
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
* --------  -------------  -----------------------------------------------------
* 
* 
* Return Value
* ------------
* Type                              Description
* ----  ------------------------------------------------------------------------
* void  The method RETurns no value
*
*
* Invoked Methods
* ---------------
*     Name                            Description
* ------------  ----------------------------------------------------------------
* printReverse  Actual Recursive method: Display a "string" object in reverse
*               order, starting at a specific character in the  "string" object.
*
********************************************************************************
*/
void printReverse(string phrase)
{
	int i = 0;
	i = phrase.length() -1;
	cout << phrase[i];
	printReverse(phrase, i);
}	// End method: printReverse(string)


/******************************************************************************
* Method: printReverse(string, int)
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
* --------  -------------  ----------------------------------------------------
* 
* 
* Return Value
* ------------
* Type                              Description
* ----  -----------------------------------------------------------------------
* void  The method RETurns no value
*
*
* Invoked Methods
* ---------------
* None
*
*******************************************************************************
*/
void printReverse(string phrase, int index)
{
	index--;
	if (index > 0)
	{
		cout << phrase[index];
	}
	else if (index == 0)
	{
		cout << phrase[index] << endl;
	}
	else
	{
		return;
	}
	printReverse(phrase, index);



}	// End method: printReverse(string, int)