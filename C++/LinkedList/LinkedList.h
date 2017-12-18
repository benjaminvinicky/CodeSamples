#pragma once

// External Definition files
#include <sstream>
#include<string>
// None

// Namespaces utilized in this program
using namespace std;  // Announces to the compiler that members of the namespace
                      // "std" are utilized in this program


/******************************************************************************
*      Class: LinkedList
* Base Class: 
*
* Programmer: Benjamin T. Vinicky
*
*
* Revision     Date                          Release Comment
* --------  ----------  -------------------------------------------------------
*   1.0     06/06/2017  Initial Release
*
*
* Class Description
* -----------------
*
*
* --------------------------- Public Methods Interface ------------------------
*       Method                                Description
* ------------------  ---------------------------------------------------------
*
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
*
*
* --------------------------- Public Data Members -----------------------------
*              Data
*    Type      Type   Name                    Description
* ----------  ------  ----  ---------------------------------------------------
*                         *** No public data members ***
*
*******************************************************************************
*/
class LinkedList
{
private:
	struct ListNode
	{
		double value;
		ListNode *next;
		ListNode(double x1, ListNode *next1 = NULL)
		{
			value = x1;
			next = next1;
		}
	};
	ListNode *head;
public:
	LinkedList() { head = NULL; }
	LinkedList(const LinkedList&);
	~LinkedList();
	void add(double x);
	bool isMember(double x);
	string toString();
	void remove(double x);
	void reverse();
};
