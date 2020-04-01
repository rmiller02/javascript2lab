/*

Create a single object named `slideshow` that represents the data and functionality of a picture slideshow. There should be NO VARIABLES OUTSIDE THE OBJECT. The object should have properties for:

1. An array called `photoList` that contains the names of the photos as strings
2. An integer `currentPhotoIndex` that represents which photo in the `photoList` is currently displayed
3. A `nextPhoto()` function that moves `currentPhotoIndex` to the next index `if `there is one, and:
 4. logs the current photo name.
 5. Otherwise, log "End of slideshow";
4. A `prevPhoto()` function that does the same thing, but backwards.
5. A function `getCurrentPhoto()` that returns the current photo from the list.
*/

var slideShow = {

	photoList: ['image1', 'image2', 'image3'],
	currentPhotoIndex: 0,
	nextPhoto: function() {
		this.currentPhotoIndex++;
		if (this.currentPhotoIndex <= 3) {
			return this.currentPhotoIndex;
} else {
			return ("End of slideshow.");
			this.currentPhotoIndex--;
}
},
prevPhoto: function() {
	this.currentPhotoIndex--;
	if (this.currentPhotoIndex > -1) {
		return this.currentPhotoIndex;
	} else {
			return ("Beginning of slideshow.");
			}
},
getCurrentPhoto: function() {
	return (this.photoList[this.currentPhotoIndex]);

}
};

console.log(slideShow.nextPhoto());
console.log(slideShow.nextPhoto());
console.log(slideShow.getCurrentPhoto());
console.log(slideShow.nextPhoto());
console.log(slideShow.nextPhoto());

console.log(slideShow.prevPhoto());
console.log(slideShow.prevPhoto());
console.log(slideShow.prevPhoto());
console.log(slideShow.prevPhoto());
console.log(slideShow.prevPhoto());

