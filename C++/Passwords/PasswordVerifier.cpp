/******************************************************************************
 * Bellevue Class: PROG 113
 *     Instructor: Robert Main
 *
 * Solution/Project Name: Client-Project4
 *             File Name: PasswordVerifier.cpp
 *
 * This file defines the entry point method, main(), for a C++ Console
 * application. When the executable file is selected for execution, the OS
 * will transfer execution to the first line of code in method main(). Other
 * methods called from main() may be defined here as well.
 *
 * Instructor Project Solution
 * Assigned Project: 4
 *
 * Revision     Date                        Release Comment
 * --------  ----------  ------------------------------------------------------
 *   1.0     04/28/2016  Initial Release
 *
 *
 * UDTs Utilized
 * -------------
 *      Name                                Description
 * --------------  --------------------------------------------------------------
 * PasswordStatus  Object to convery more than one value RETurned by method
 *                 "verifyPassword", namely the status of the 4 requirements
 *
 *
 * Program Inputs
 * --------------
 *  Device                              Description
 * --------  ------------------------------------------------------------------
 * Keyboard  User's password to verify
 *
 *
 * Program Outputs
 * ---------------
 *  Device                            Description
 * --------  ------------------------------------------------------------------
 * Monitor   Password status, including reason(s) if invalid
 *
 *
 * File Methods
 * ------------
 *      Name                             Description
 * --------------  ------------------------------------------------------------
 * main            Program entry point method
 *
 ******************************************************************************
 */
// External Definition files
// The first inclusion file MUST always be declared and MUST be first in the list
#include "stdafx.h"  // Defines IDE required external definition files
#include <iostream>          // Defines objects and classes used for stream I/O
#include "PasswordStatus.h"  // Defines UDT: PasswordStatus

// Namespaces utilized in this program
using namespace std; // Announces to the compiler that members of the namespace
                     // "std" are utilized in this program


// Forward Method Prototypes
// None


/******************************************************************************
* Method: main()
* 
* Method Desciption
* -----------------
* This program verifies a password solicited from the User.
* In addition to validating the password, the program must specify the
* requirement(s) that were not met should the password not be valid. This is
* accomplished by using a "struct" to record the status of each requirement:
*   1. Meets a minimum length (specified by the caller)
*   2. Contains at least one ASCII digit
*   3. Contains at least one lower-case ASCII letter
*   4. Contains at least one upper-case ASCII letter
*
* The validation is performed by creating a class object of type "PasswordStatus",
* initilaized by passing a C-string array containing the Client's password to
* verify.
*
* The status of the validation is obtained by calling the class method "isValid()",
* and if invalid, displaying the requirement(s) that failed, "bool" RETurn values
* of methods of the class.
*
*
* Pre-Conditions
* --------------
* None
*
* Method Arguments
* ----------------
*   Type        Name                          Description
* --------  ------------  -----------------------------------------------------
*                        *** No Arguments supplied ***
*
* Return Value
* ------------
*   Type                              Description
* --------  -------------------------------------------------------------------
* int       Program execution status
*
*******************************************************************************
*/
int main()          
{
	// Constant "const" Value Declarations
	const int NO_ERRORS = 0;  // No program execution errors

	const int MIN_PASSWORD_LENGTH = 6;
	const int MAX_PASSWORD_LENGTH = 30;

	// Array Declaration
	// C-String, "char" Array to receive User's password
	char password[MAX_PASSWORD_LENGTH + 1];
	
	// Initialized Variable Declarations
	int programStatus = NO_ERRORS;  // Assum no program execution errors
	
	// Uninitialized Variable Declarations
	bool status;


	// Describe the Project Assignment to the User
	cout << "                       PROG-113: Project #4\n"
		 << "                         Password Verifier\n\n"
		 << "This program solicits a password from the User and determines if it\n" 
		 << "meets 4 requirements, 1) At least " << MIN_PASSWORD_LENGTH << " characters,"
		 << "2) Contains at least\n"
		 << "1 upper-case letter, 3) Contains at least 1 lower-case letter, and\n"
		 << "4) Contains at least digit." << endl << endl;


	// Solicit a Password from the User
	cout << "Enter a password (" << MIN_PASSWORD_LENGTH << " - " << MAX_PASSWORD_LENGTH
		<< "): ";
	cin.getline(password, MAX_PASSWORD_LENGTH);

	
	// Initialized UDT Object
	PasswordStatus userPassword(password, MIN_PASSWORD_LENGTH);

	// Determine its status
	status = userPassword.isValid();

	// Display the result(s) of verifying the User's password
	cout << "The password \"" << password << "\" ";
	if (status)
	{	// The password is valid
		cout << " IS valid" << endl;
	}
	else
	{	// Otherwise, one or more requirements have not been met...
		// First, indicate the the password is invalid
		cout << "is NOT valid" << endl;

		// The determine the reasons(s) why...
		if (!userPassword.sufficientLength())
			cout << "  Reason: Length less than " << MIN_PASSWORD_LENGTH << " characters" << endl;
		if (!userPassword.hasDigit())
			cout << "  Reason: No digit present" << endl;
		if (!userPassword.hasLowerCase())
			cout << "  Reason: No lower-case letter present" << endl;
		if (!userPassword.hasUpperCase())
			cout << "  Reason: No upper-case letter present" << endl;
	}


	// This prevents the Console Window from closing during debug mode
	// Note: Generally, you should not remove this code
	cin.ignore(cin.rdbuf()->in_avail());
	cout << "\nPress only the 'Enter' key to exit program: ";
	cin.get();

	return programStatus;

}	// End Method: main()
