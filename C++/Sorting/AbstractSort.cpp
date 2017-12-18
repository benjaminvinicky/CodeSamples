/******************************************************************************
*      Class: AbstractSort
* Base Class: ************
*
* Programmer: Benjamin Vinicky
*
* Revision     Date                          Release Comment
* --------  ----------  -------------------------------------------------------
*   1.0     05/20/2017  Initial Release
*
*
* File Description
* ----------------
* This file contains the external class method definitions and the initialization
* of any constant, "const" values declared at Class scope.
*
*
* ------------------------- Public Methods Interface --------------------------
*      Method                            Description
* ----------------  -----------------------------------------------------------
*   int * sort(int[], int)		Sorts arrays and adds comparisons
*	bool addComparison(int, int)Increments comparisons by one and compares two int values
*	int getComparisons()        returns private member comparisons
*
* ----------------------------- Private Methods -------------------------------
*      Method                            Description
* ----------------  -----------------------------------------------------------
*  	void zeroOut()				Sets comparisons to zero
*
*
* ----------------------- Data Member Initializations -------------------------
*                          *** No Initializations ***
*
*******************************************************************************
*/

// External Definition files
// The first inclusion file is required by the Visual Studio complier and
// MUST be first in the "include" files list
#include "stdafx.h"  // Defines IDE required "pre-compiled" definition files

// *** Note: Change "Class" to your class name! (Remove this comment!) ***
#include "Sort.h"


//********************************************* 
// Class Default Constructor                  *
//                                            *
//*********************************************
AbstractSort::AbstractSort()
{}
//********************************************* 
// Methods:                                    *
//                                            *
//*********************************************
//Sets Comparisons to zero at the beginning of a sort call
void AbstractSort::zeroOut()
{
	comparisons = 0;
}
//Returns comparisons
int AbstractSort::getComparisons()
{
	return comparisons;
}
//Compares two ints and increases comparisons made by one
bool AbstractSort::addComparison(int index, int min)
{
	comparisons++;
	bool compare = false;
	if (index < min)
	{
		compare = true;
	}

	return compare;
}
