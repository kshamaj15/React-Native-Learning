class Meal {
    constructor(
        id,
        catIds,
        title,
        affordibility,
        complexity,
        imageUrl,
        duration,
        ingredients,
        steps,
        isGlutenFree,
        isVegan, 
        isVegetarian,
        isLactoseFree
    ) {
        this.id = id;
        this.catIds = catIds;
        this.title = title;
        this.affordibility = affordibility;
        this.complexity = complexity;
        this.imageUrl = imageUrl;
        this.duration = duration;
        this.ingredients = ingredients;
        this.stesteps = steps;
        this.isGlutenFree = isGlutenFree;
        this.isVegan = isVegan;
        this.isvisVegetarian =isVegetarian;
        this.isLactoseFree = isLactoseFree;
    }
}

export default Meal;
