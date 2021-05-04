# day_care_app
This repo is day care app demo built as part of project for javascript bootcamp.

This app shall provide a feature to where a person can checkin to a day care and provide messaging with
other parents (i.e. group chat) and teachers and the owner/admin.  The app shall also provide a feature
where the owner/admin can see who has checked in that day and who is absent.  At the same time, can
participate and monitor the chat.  Finally, an agenda can be made so the admin/owner can see what to 
accomplish that day.

The reason I am building this as it provides a way for daycare's to manage when children are in the
school and when they are not.  They can simply checking via the app; however, the app (using the map
tool) will ensure that the parent is checking a child in when they are the school.  Thsi provides
a quick glance to see who is and not for any teacher or admin/owner.

The deadline for this app to go live is on May 9th, 2021.

The target audience is daycare owners and the parents that use that daycare.

# Architecture
![DayCareArch](https://user-images.githubusercontent.com/7104330/116336843-3d9cdf00-a7a7-11eb-8e41-2e2935c76580.png)

The system shall use Firebase for email/password authentication.
The system shall also use Firebase to save the status of whether the parent has checked in or not.
The system shall also use Firebase to process ongoing chats.
The system shall use the Google Maps API to verify that checkin is valid by making sure Parent is checking in at the facility.

# Wire Frames
![parent](https://user-images.githubusercontent.com/7104330/116493730-52dc4100-a86d-11eb-8c97-9c37ae6e72a7.PNG)
![admin](https://user-images.githubusercontent.com/7104330/116493731-52dc4100-a86d-11eb-9ca0-fe9b4b7aebd8.PNG)
![login](https://user-images.githubusercontent.com/7104330/116493732-52dc4100-a86d-11eb-9f19-ee23dd5dd213.PNG)


# MileStones

* ~~4/27/2021 - Project plan, wireframes, architecture defined.~~
* ~~4/28/2021 - CSS/HTML program and components design in place.~
* ~~4/29/2021 - CSS/HTML program and componentn implementation.~
* 4/30/2021 - Firebase connection and collections setup.
* ~~5/01/2021 - Implementation~
* ~~5/02/2021 - Implementation~
* ~~5/03/2021 - Implementation~
* 5/04/2021 - Implementation
* 5/05/2021 - Implementation
* 5/06/2021 - Test
* 5/06/2021 - Test
* 5/07/2021 - Test
* 5/08/2021 - Prep for deliver/presentation
* 5/09/2021 - Delivery.
