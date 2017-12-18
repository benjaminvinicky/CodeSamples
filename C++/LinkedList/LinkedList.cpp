/******************************************************************************
*      Class: LinkedList
* Base Class: 
*
* Programmer: Benjamin T Vinicky
*
* Revision     Date                          Release Comment
* --------  ----------  -------------------------------------------------------
*   1.0     06/06/2017  Initial Release
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
*	void add(double x)              adds double to the front of the linked list
*	bool isMember(double x)         allows user to check if value is in list
*	string toString();				gets the list and puts it into a string	
*	void remove(double x);			removes a double from the list
*	void reverse();					reverses the order of the list
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

// *** Note: Change "Class" to your class name! (Remove this comment!) ***
#include "LinkedList.h"
#include <sstream>
#include<string>
#include <iostream>  // Defines objects and classes used for stream I/O
#include <iomanip> 



//********************************************* 
// Class Default Constructor                  *
//                                            *
//*********************************************


//********************************************* 
// Class Destructor                           *
//                                            *
//*********************************************
//goes through the list and deletes nodes
LinkedList::~LinkedList()
{
	if (head != nullptr)
	{
		ListNode *current = head;
		do
		{
			ListNode* next = current->next;
			delete current;
			current = next;
		} while (current != nullptr);
	}
}

//********************************************* 
// Class Copy Constructor                     *
//                                            *
//*********************************************
LinkedList::LinkedList(const LinkedList& other)
{
	//no list to copy
	if (other.head == NULL) 
	{
		head = NULL;
	}
	else
	{
		//deep copy making sure all new nodes are individual from their derived nodes
		head = new ListNode(other.head->value);
		head->next = other.head->next;

		ListNode *current = head;
		ListNode *otherHead = other.head;
		ListNode *currentOther = otherHead;

		while (currentOther->next != NULL) 
		{
			current->next = new ListNode(currentOther->next->value);
			currentOther = currentOther->next;
			current = current->next; and tihs other thing
		}
	}

}

//********************************************* 
// Method:                                    *
//                                            *
//*********************************************
void LinkedList::add(double x)
{
	if (head == NULL)
	{
		head = new ListNode(x);//The first node!
	}

	else
	{
		//Make a temp node
		ListNode *tempHead;
		//fill it with the new value
		tempHead = new ListNode(x);
		//point it to the head
		tempHead->next = head;
		//make it the new head
		head = tempHead;
	}
}
bool LinkedList::isMember(double x)
{
	bool found = false; //because we only want one return
	if (head->value == x)
	{
		found = true;
	}
	else //walk down until we find it
	{
		ListNode *nodePtr = head;
		while (nodePtr->next != nullptr)
		{
			nodePtr = nodePtr->next;
			if (nodePtr->value == x)
			{
				found = true;
				break; //found it so break and let everyone know the good news
			}
		}
	}
	return found;
}

string LinkedList::toString()
{
	ostringstream str;

	ListNode* current = head;

	if (current != nullptr)
	{
		str << '[';

		str << setprecision(4) << current->value;

		while (current->next != nullptr)
		{
			str << ", " << current->next->value;
			current = current->next;
		}
		str << ']';
	}
	else
		str << "ARRAY IS EMPTY!!!";
	

	return str.str();
}
void LinkedList::remove(double target)
{
	if (head == nullptr)
		throw string("target not found!"); //this was your idea
	else if (head->value == target)
	{
		ListNode *toDelete = head;
		head = head->next;
		delete toDelete;
	}
	else
	{
		ListNode *current = head;

		while (current->next != nullptr && current->next->value != target)
			current = current->next;

		if (current->next == nullptr)
			throw string("target not found!"); //I didn't implement a catch though
		else
		{
			ListNode * toDelete = current->next;
			current->next = current->next->next;
			delete toDelete;
		}
	}
}
void LinkedList::reverse()
{
	//simple and yet so difficult
	if (head == NULL) 
		return;

	ListNode *prev = NULL;
	ListNode *current = head; 
	ListNode *next;

	while (current) 
	{
		next = current->next;
		current->next = prev;
		prev = current;
		current = next;
	}
	head = prev;
}
