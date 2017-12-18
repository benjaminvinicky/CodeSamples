/******************************************************************************
*      Class:Selection Sort
* Base Class:Abstract Sort
*
* Programmer:Benjamin Vinicky
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
*	int* getArr()				   -Returns the array pointer
*	void printArray()			   -Prints out array (Yes, I know it should be 
*									done in the driver program, but I kept run-
*									ning into issues. So I did what I needed 
*									here.)
*	virtual int * sort(int[], int) -This is the required function to sort the
*									array. This requires the driver program to
*									specify the array, which seemed weird beca-
*									use we went through all that trouble of 
*									dynamically allocating the array inside the
*									constructor.
*	virtual int * sort()		   -This uses the dynamically allocated array
*
* ----------------------------- Private Methods -------------------------------
*      Method                            Description
* ----------------  -----------------------------------------------------------
*  void copyArray(int[],int[],int) -This copies one array into the new one in 
*									the constructor
*
*
* ----------------------- Data Member Initializations -------------------------
*                          *** No Initializations ***
*
*******************************************************************************
*/

// External Definition files
// The first inclusion file is required by the Visual Studio complier and
#include "stdafx.h"  // Defines IDE required "pre-compiled" definition files
#include "Sort.h"


	//********************************************* 
	// Class Constructor                  *
	//                                            *
	//*********************************************
//sets class private members and copies provided array into a dynamically created one.
SelectionSort::SelectionSort(int arr[], int num)
{
	size = num;
	arrPntr = new int[size];
	copyArray(arrPntr, arr, size);	
}

	//********************************************* 
	// Method:                                    *
	//                                            *
	//*********************************************
//Returns pointer to array
int * SelectionSort::getArr()
{
	return arrPntr;	
}
//Simple array copy
void SelectionSort::copyArray(int destination[], int source[], int size)
{
	for (int i = 0; i < size; i++)
	{
		destination[i] = source[i];
	}
}
//Required method from AbstractSort that passes in array and sorts while counting comparisons
int * SelectionSort::sort(int arr[], int num)
{
	zeroOut();
		
	int minIndex, startScan, minValue;

	for (startScan = 0; startScan < num - 1; startScan++)
	{
		minIndex = startScan;
		minValue = arr[startScan];
		for (int index = startScan + 1; index < num; index++)
		{
			if (addComparison(arrPntr[index], minValue))
			{
				minValue = arr[index];
				minIndex = index;
			}
		}
		arr[minIndex] = arr[startScan];
		arr[startScan] = minValue;
	}
	return arrPntr;
}
//method that sorts dynamically allocated array
int * SelectionSort::sort()
{
	zeroOut();

	int minIndex, startScan, minValue;

	for (startScan = 0; startScan < size - 1; startScan++)
	{
		minIndex = startScan;
		minValue = arrPntr[startScan];
		for (int index = startScan + 1; index < size; index++)
		{
			if (addComparison(arrPntr[index], minValue))
			{
				minValue = arrPntr[index];
				minIndex = index;
			}
		}
		arrPntr[minIndex] = arrPntr[startScan];
		arrPntr[startScan] = minValue;
	}
	return arrPntr;
}
//Because I couldn't get another method working that made printing in the driver program a cakewalk.
void SelectionSort::printArray()
{ 
	cout << "[ ";
	for (int i = 0; i < DISPLAY_SIZE - 1; i++)
	{
		cout << arrPntr[i] << ", ";
	}
	cout << arrPntr[DISPLAY_SIZE - 1] << " ]" << endl;
}
//delete dynically allocated array
SelectionSort::~SelectionSort()
{
	delete arrPntr;
}

