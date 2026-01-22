// Type definitions for JavaScript

// User type
export const UserType = {
  id: '',
  name: '',
  avatarUrl: '',
};

// Club type
export const ClubType = {
  id: '',
  name: '',
  description: '',
  imageUrl: '',
  imageHint: '',
  members: 0,
};

// Event type
export const EventType = {
  id: '',
  title: '',
  date: '',
  startTime: '',
  endTime: '',
  location: '',
  description: '',
  club: '',
};

// Resource type
export const ResourceType = {
  id: '',
  title: '',
  category: '',
  uploaded: '',
  fileUrl: '',
};

// TimetableSlot type
export const TimetableSlotType = {
  id: '',
  day: '', // 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday'
  startTime: '',
  endTime: '',
  courseCode: '',
  courseName: '',
  location: '',
  lecturer: '',
};

// FoundItem type
export const FoundItemType = {
  id: '',
  name: '',
  description: '',
  imageUrl: '',
  imageHint: '',
  dateFound: '',
  locationFound: '',
};

// LostItem type
export const LostItemType = {
  id: '',
  name: '',
  description: '',
  imageUrl: '',
  imageHint: '',
  dateReported: '',
  lastSeenLocation: '',
  contact: '',
};
