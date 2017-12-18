#pragma once

// External Definition files
// -------------------------
// None

// Namespaces utilized in this program
using namespace std;  // Announces to the compiler that members of the namespace
                      // "std" are utilized in this program
#include <iostream>


/******************************************************************************
*      Class: SelectionSort / AbstractSort
* Base Class: AbstractSort
*
* Programmer: Benjamin Vinicky
*
*
* Revision     Date                          Release Comment
* --------  ----------  -------------------------------------------------------
*   1.0     05/20/2017  Initial Release
*
*
* Class Description
* -----------------
* This header file contains two classes. AbstractSort, and SelectionSort.
* AbstractSort is an abstract class and provides some basic framework for
* SelectionSort. It requires SelectionSort to have its own Sort method, which
* takes an array and sorts it while counting comparisons made.
*
* --------------------------- Public Methods Interface ------------------------
*       Method                                Description
* ------------------  ---------------------------------------------------------
*					  See corresponding .cpp files for description
*
* --------------------------------- Private Methods ---------------------------
*       Method                                Description
* ------------------  ---------------------------------------------------------
*                     See corresponding .cpp files for description
*
*
* -------------------------- Private Data Members -----------------------------
*              Data
*    Type      Type   Name                     Description
* ----------  ------  ----  ---------------------------------------------------
*				int  comparisons    holds value for total comparisons made
*				int  size           hold value for array size
*	pointer		int  arrPntr		pointer for dynamic array allocation
*   const		int  DISPLAY_SIZE   const to hold number of array elements to 
*									be shown
*
* --------------------------- Public Data Members -----------------------------
*              Data
*    Type      Type   Name                    Description
* ----------  ------  ----  ---------------------------------------------------
*                         *** No public data members ***
*
*******************************************************************************
*/
class AbstractSort
{
private:
	int comparisons;
public:
	AbstractSort();
	virtual int * sort(int[], int)=0;
	void zeroOut();
	bool addComparison(int, int);
	int getComparisons();

};

class SelectionSort : public AbstractSort
{
private:
	int size;
	void copyArray(int[], int[], int);
	int *arrPntr;
	const int DISPLAY_SIZE = 20;

public:
	SelectionSort(int[], int);
	int* getArr();
	void printArray();
	virtual int * sort(int[], int);
	virtual int * sort();
	~SelectionSort();
};
