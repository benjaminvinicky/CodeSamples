/******************************************************************************
* Bellevue Class: PROG-113
*           Term: Spring 2017
*     Instructor: Robert Main
*
* Solution/Project Name: **VinickyProject7** 
*             File Name: **Driver.cpp**      
*
* This file defines the entry point method, main(), for a C++ Console
* application. When the executable file is selected for execution, the OS
* will transfer execution to the first line of code in method main(). Other
* methods called from main() may be defined here as well.
*
* Programmer: **Benjamin Vinicky**
*
* Assigned Project Number: **Project7**
*
*
* Revision     Date                        Release Comment
* --------  ----------  -------------------------------------------------------
*   1.0     05/20/2017  Initial Release
*
*
* Program Inputs
* --------------
*  Device                              Description
* --------  -------------------------------------------------------------------
* Keyboard  **  None **
*
*
* Program Outputs
* ---------------
*  Device                            Description
* --------  -------------------------------------------------------------------
* Monitor   ** Displays the first 20 elements of an array after a sort, along with
			   the amount of comparisons made during the sort.**
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
#include <cstdlib>  // used for random
#include <ctime>	// used for seeding
#include <iostream>  // Defines objects and classes used for stream I/O
#include "Sort.h"   // Class header file

// Namespaces utilized in this program
using namespace std; // Announces to the compiler that members of the namespace
                     // "std" are utilized in this program

// Method Prototypes
// -----------------
// None


/******************************************************************************
* Method: main()
* 
* Method Description
* ------------------
* ** This a driver program that tests the two classes AbstractSort and SelectionSort
*	 This program should create an array 500 elements long, with integer values ranging
*	 from 1-1000, and then create two objects of class SelectionSort, copying the array
*	 into it and then sorting the arrays. After the sort, the program displays the first
*	 twenty elements of the array and how many comparisons were made.
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
	const int SIZE = 500;
	const int MAX = 1000;
	const int MIN = 1;
	const int NUM_OBJECTS = 2;
	// Initialized Variable Declarations
	int programStatus = NO_ERRORS;  // Assume no program execution errors

	// Uninitialized Variable Declarations
	unsigned seed;

	seed = time(0);
	srand(seed);

	int arr1[SIZE];
	int arr2[SIZE];

	//Filling array with random int from 1-1000
	for (int i = 0; i < SIZE; i++)
	{
		arr1[i] = arr2[i] = rand() % (MAX + MIN) + MIN;
	}
	
	//create pointer to array of dynamically allocated objects
	SelectionSort * sorter[NUM_OBJECTS] = 
		{
			new SelectionSort(arr1, SIZE),
			new SelectionSort(arr2, SIZE)
		};

	//Sort the object's arrays for each object in the array of objects... and then print it
	for (int i = 0; i < NUM_OBJECTS ; i++)
	{
		sorter[i]->sort();
		cout << "Array " << i + 1 << " After Sort: " << endl;
		sorter[i]->printArray();
		cout << "Number of comparisons made: " << sorter[i]->getComparisons() << endl;
		cout << endl;
	}
	//delete the pointer
	delete * sorter;


	// !! Insert your code here (remove this comment line) !!


	// This prevents the Console Window from closing during debug mode using
	// the Visual Studio IDE.
	// Note: Generally, you should not remove this code
	cin.ignore(cin.rdbuf()->in_avail());
	cout << "\nPress only the 'Enter' key to exit program: ";
	cin.get();

	return programStatus;

}	// End Method: main()
