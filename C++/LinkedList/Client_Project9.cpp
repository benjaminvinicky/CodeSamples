/******************************************************************************
* Bellevue Class: PROG-113
*           Term: Spring 2017
*     Instructor: Robert Main
*
* Solution/Project Name: VinickyProject9**  (Ex: Project1)
*             File Name: Client_Project9.cpp       (Ex: payrate.cpp)
*
* This file defines the entry point method, main(), for a C++ Console
* application. When the executable file is selected for execution, the OS
* will transfer execution to the first line of code in method main(). Other
* methods called from main() may be defined here as well.
*
* Programmer: Benjamin Vinicky
*
* Assigned Project Number: 9
*
*
* Revision     Date                        Release Comment
* --------  ----------  -------------------------------------------------------
*   1.0     06/06/2017  Initial Release
*
*
* Program Inputs
* --------------
*  Device                              Description
* --------  -------------------------------------------------------------------
* Keyboard  ** None **
*
*
* Program Outputs
* ---------------
*  Device                            Description
* --------  -------------------------------------------------------------------
* Monitor   ** Results of various class methods **
*
*
* ADTs (Abstract Data Types) Utilized
* ----------------------------------_
*       Name                               Description
* ----------------  ----------------------------------------------------------
*
*
* File Methods
* ------------
*     Name                             Description
* ------------  ---------------------------------------------------------------
* main          Program entry point method
* **** Add name and description of any other methods defined in this file ****
*
*******************************************************************************
*/
// External Definition files
// The first inclusion file is required by the Visual Studio complier and
// MUST be first in the "include" files list
#include "stdafx.h"  // Defines IDE required "pre-compiled" definition files
#include <string>
#include <iostream>  // Defines objects and classes used for stream I/O
#include "LinkedList.h"   // Include your UDT class header file(s) here
#include <stdlib.h>     /* srand, rand */
#include <time.h>       /* time */

// Namespaces utilized in this program
using namespace std; // Announces to the compiler that members of the namespace
                     // "std" are utilized in this program

// Method Prototypes
double floatRandom(double, double);
// None


/******************************************************************************
* Method: main()
* 
* Method Description
* ------------------
* ** This program demonstrates various functions of a linked list class and
	 displays the output on screen. A linklist object is created with 10 random
	 double values from 10-20 and then various functions are called to alter the 
	 linked list. Changes are shown on screen to demonstrate functionality.
*
*
* Preconditions
* -------------
* ** None **
*
*
* Method Arguments
* ----------------
*   Type        Name                        Description
* --------  -------------  ----------------------------------------------------
*                        *** No Arguments supplied ***
*
*
* Return Value
* ------------
*   Type                              Description
* --------  -------------------------------------------------------------------
* int       Program execution status: 0 - No errors
*
*
* Invoked File Methods
* --------------------
*     Name                             Description
* ------------  --------------------------------------------------------------
*
*******************************************************************************
*/
int main()          
{
	// Constant "const" Value Declarations
	const int NO_ERRORS = 0;  // Program Execution Status: No errors
	const double MIN_VALUE = 10.0;
	const double MAX_VALUE = 20.0;
	// Initialized Variable Declarations
	int programStatus = NO_ERRORS;  // Assume no program execution errors

	// Uninitialized Variable Declarations
	double randomNum;


	// !! Insert your code here (remove this comment line) !!
	srand(time(NULL));

	LinkedList myList;
	for (int i = 0; i < 10; i++)
	{
		randomNum = floatRandom(MIN_VALUE, MAX_VALUE);
		myList.add(randomNum);
	}

	cout << "MyList Contents: " << myList.toString() << endl;
	cout << "\nCreating new list called myNewList with copy constructor." << endl;

	LinkedList myNewList(myList);


	cout << "\nRemoving a number from the new list..." << endl;
	myNewList.remove(randomNum);
	cout << "My first list contents: " << myList.toString() << endl;
	cout << "\nMy new list contents: " << myNewList.toString() << endl;


	cout << "\nReversing the first list order..." << endl;
	myList.reverse();
	
	cout << "My first list contents: " << myList.toString() << endl;
	cout << "\nMy new list contents: " << myNewList.toString() << endl;



	// This prevents the Console Window from closing during debug mode using
	// the Visual Studio IDE.
	// Note: Generally, you should not remove this code
	cin.ignore(cin.rdbuf()->in_avail());
	cout << "\nPress only the 'Enter' key to exit program: ";
	cin.get();

	return programStatus;

}	// End Method: main()
double floatRandom(double minValue, double maxValue)
{
	double f = (double)rand() / RAND_MAX;
	return minValue + f * (maxValue - minValue);
}
