import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const Elements = [];
  const element1 = new ClassRoom(19);
  const element2 = new ClassRoom(20);
  const element3 = new ClassRoom(34);

  Elements.push(element1, element2, element3);
  return Elements;
}
