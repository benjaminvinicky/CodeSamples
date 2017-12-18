#pragma once

// External Definition files
// -------------------------
// None

// Namespaces utilized in this program
using namespace std;  // Announces to the compiler that members of the namespace
                      // "std" are utilized in this program


/******************************************************************************
*      Class: PasswordStatus
*
* Programmer: Benjamin Vinicky
*
*
* Revision     Date                          Release Comment
* --------  ----------  -------------------------------------------------------
*   1.0     05/01/2017  Initial Release
*
*
* Class Description
* -----------------
* This class checks to see if user input meets some basic requirements for a password
* using c-string methods
*
* --------------------------- Public Methods Interface ------------------------
*       Method                                Description
* ------------------  ---------------------------------------------------------
* isValid()				Combines all other methods to see if all criteria is met
* hasUpperCase()		Checks to see if there are any UpperCase characters in C-string
* hasLowerCase()		Checks to see if there are any LowerCase characters in C-string
* hasDigit()			Checks to see if there are any Numbers in C-string
* sufficientLength()	Checks to see if the length in C-string meets minimum requirements
*
* --------------------------------- Private Methods ---------------------------
*       Method                                Description
* ------------------  ---------------------------------------------------------
*                           *** No private methods ***
*
*
* -------------------------- Private Data Members -----------------------------
*              Data
*    Type      Type   Name                     Description
* ----------  ------  ----  ---------------------------------------------------
* 	int minLength				Holds a minimum length thats tested for in sufficientLength()
*	int length					Holds the actual length of the c-string
*	const char * password		Holds the Constant char pointer for testing user input
*
* --------------------------- Public Data Members -----------------------------
*              Data
*    Type      Type   Name                    Description
* ----------  ------  ----  ---------------------------------------------------
*                         *** No public data members ***
*
*******************************************************************************
*/
class PasswordStatus
{
private:
	//min length is passed in. Length is the length of the passed in c-string, and then use a char * password to copy in c-string
	int minLength;
	int length;
	const char * password;

public:
	PasswordStatus(const char*, int);
	bool isValid();
	bool hasUpperCase();
	bool hasLowerCase();
	bool hasDigit();
	bool sufficientLength();
	~PasswordStatus();
};
