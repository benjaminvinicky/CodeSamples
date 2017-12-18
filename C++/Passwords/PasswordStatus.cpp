/******************************************************************************
*      Class: Prog 113
*    Program: VinickyProject4
*  File Name: PasswordStatus.cpp
*
* Programmer: Benjamin Vinicky
*
* Revision     Date                          Release Comment
* --------  ----------  -------------------------------------------------------
*   1.0     05/01/2017  Initial Release
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
* isValid()				Combines all other methods to see if all criteria is met
* hasUpperCase()		Checks to see if there are any UpperCase characters in C-string
* hasLowerCase()		Checks to see if there are any LowerCase characters in C-string
* hasDigit()			Checks to see if there are any Numbers in C-string
* sufficientLength()	Checks to see if the length in C-string meets minimum requirements
*
*
* ----------------------------- Private Methods -------------------------------
*      Method                            Description
* ----------------  -----------------------------------------------------------
*                          *** No private methods ***
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
#include "PasswordStatus.h"
#include <cstring>
#include <cctype>


//********************************************* 
// Class Default Constructor                  *
//                                            *
//*********************************************


//********************************************* 
// Class Initializing Constructor             *
//                                            *
//*********************************************
PasswordStatus::PasswordStatus(const char *pntr, int min)
{
	if (min > 0 && min % 1 == 0) //Make sure user enters a valid integer
	{
		minLength = min;
	}
	else minLength = 0; //or else set to 0

	length = strlen(pntr); //get length of string

	password = new char[length]; //dynamically create my const * using length

	password = pntr; // copy in the pntr
}

PasswordStatus::~PasswordStatus() //destructor...
{
	delete[] password;
}


//********************************************* 
// Methods:                                    *
//                                            *
//*********************************************

bool PasswordStatus::isValid() //test all tests and return false if any fail
{
	bool valid = false;
	if (hasUpperCase() && hasLowerCase() && hasUpperCase() && hasDigit() && sufficientLength())
		valid = true;
	return valid;
}
bool PasswordStatus::hasUpperCase() //tests for uppercase letters using c-string functions
{
	bool hasUpper = false;
	for (int i = 0; i < length; i++)
	{
		if (isupper(*(password + i)))
		{
			hasUpper = true;
			break;
		}
	}
	return hasUpper;
}
bool PasswordStatus::hasLowerCase() //tests for lowercase letters using c-string functions
{
	bool hasLower = false;
	for (int i = 0; i < length; i++)
	{
		if (islower(*(password + i)))
		{
			hasLower = true;
			break;
		}
	}
	return hasLower;
}
bool PasswordStatus::hasDigit() //tests for numbers using c-string functions
{
	bool hasDigit = false;
	for (int i = 0; i < length; i++)
	{
		if (isdigit(*(password + i)))
		{
			hasDigit = true;
			break;
		}
	}
	return hasDigit;
}
bool PasswordStatus::sufficientLength() //tests for length meeting minLength criteria
{
	bool sufficient = false;

	if (length >= minLength)
		sufficient = true;

	return sufficient;
	
}