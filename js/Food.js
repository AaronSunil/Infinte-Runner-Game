class Food
{
    constructor()
    {
        foodObjImg = preloadImage("images/Milk.png")
        foodObj = createSprite(200,200,50,50)
    }
    display()
    {

        imageMode(CENTER);
        image(foodObjImg,720,220,70,70);
    }
}