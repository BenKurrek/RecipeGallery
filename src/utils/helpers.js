const SORT_OPTIONS = {
  NONE: "N",
  COOK_TIME: {
    slowToFast: "slowToFast",
    fastToSlow: "fastToSlow",
  },
  RATING: {
    highToLow: "highToLow",
    lowToHigh: "lowToHigh",
  },
  DATE_ADDED: {
    newToOld: "newToOld",
    oldToNew: "oldToNew",
  },
};

function doesNameMatch(searched, recipeName) {
  return recipeName.toLowerCase().includes(searched.toLowerCase());
}

function normalizeData(data) {
  return data.trim().toLowerCase();
}

function isSubset(incomingList, recipeList) {
  return incomingList.every(function (ingredient) {
    return recipeList.includes(ingredient);
  });
}

function checkMultiSelectPresent(requiredList, actualList) {
  let incomingList = requiredList.map(normalizeData);
  let recipeList = actualList.split(",").map(normalizeData);
  let allPresent = isSubset(incomingList, recipeList);
  return allPresent;
}

export function filterRecipes(recipes, filters) {
  var {
    searched,
    cookTimeSorting,
    mains,
    sides,
    ingredients,
    ratingSorting,
    meats,
    veggies,
    special,
    maxPots,
    maxPans,
    maxBakingSheets,
    dateAddedSorting,
  } = filters;

  console.log("Filters: ", filters);

  // Implement your filtering logic here
  var filteredRecipes = recipes.filter(function (recipe) {
    // title
    if (
      searched &&
      !doesNameMatch(searched.toString(), recipe["Title"].toString())
    ) {
      console.log("Failed searched: ", searched, " With: ", recipe["Title"]);
      return false;
    }

    // Mains
    if (mains && !checkMultiSelectPresent(mains, recipe["Mains"])) {
      console.log("Failed mains: ", mains, " With: ", recipe["Mains"]);
      return false;
    }

    // Sides
    if (sides && !checkMultiSelectPresent(sides, recipe["Sides"])) {
      console.log("Failed sides: ", sides, " With: ", recipe["Sides"]);
      return false;
    }
    // Ingredients
    if (
      ingredients &&
      !checkMultiSelectPresent(ingredients, recipe["Ingredients"])
    ) {
      console.log(
        "Failed ingredients: ",
        ingredients,
        " With: ",
        recipe["Ingredients"],
      );
      return false;
    }
    // Meat Types
    if (meats && !checkMultiSelectPresent(meats, recipe["Meat Types"])) {
      console.log("Failed meats: ", meats, " With: ", recipe["Meat Types"]);
      return false;
    }
    // Veggy Types
    if (
      veggies &&
      !checkMultiSelectPresent(veggies, recipe["Vegetable Types"])
    ) {
      console.log(
        "Failed veggies: ",
        veggies,
        " With: ",
        recipe["Vegetable Types"],
      );
      return false;
    }

    if (maxPots && maxPots < recipe["Number Pots"]) {
      console.log(
        "Failed maxPots: ",
        maxPots,
        " With: ",
        recipe["Number Pots"],
      );
      return false;
    }
    if (maxPans && parseInt(maxPans) < parseInt(recipe["Number Pans"])) {
      console.log(
        "Failed maxPans: ",
        maxPans,
        " With: ",
        recipe["Number Pans"],
      );
      return false;
    }
    if (
      maxBakingSheets &&
      parseInt(maxBakingSheets) < parseInt(recipe["Baking Sheets"])
    ) {
      return false;
    }

    // Special Reqs
    if (
      special &&
      !checkMultiSelectPresent(special, recipe["Special Requirements"])
    ) {
      console.log(
        "Failed special: ",
        special,
        " With: ",
        recipe["Special Requirements"],
      );
      return false;
    }

    return true;
  });

  // Sorting based on cook time
  if (cookTimeSorting !== SORT_OPTIONS.NONE) {
    if (cookTimeSorting === SORT_OPTIONS.COOK_TIME.fastToSlow) {
      filteredRecipes.sort((a, b) => a["Cook Time"] - b["Cook Time"]);
    } else if (cookTimeSorting === SORT_OPTIONS.COOK_TIME.slowToFast) {
      filteredRecipes.sort((a, b) => b["Cook Time"] - a["Cook Time"]);
    }
  }

  // Sorting based on rating
  if (ratingSorting !== SORT_OPTIONS.NONE) {
    console.log("ratingSorting: ", ratingSorting, " BEFORE: ", filteredRecipes);
    if (ratingSorting === SORT_OPTIONS.RATING.highToLow) {
      filteredRecipes.sort((a, b) => b["Rating"] - a["Rating"]);
    } else if (ratingSorting === SORT_OPTIONS.RATING.lowToHigh) {
      filteredRecipes.sort((a, b) => a["Rating"] - b["Rating"]);
    }
    console.log("ratingSorting: ", ratingSorting, " AFTER: ", filteredRecipes);
  }

  // Sorting based on date added
  if (dateAddedSorting !== SORT_OPTIONS.NONE) {
    console.log(
      "dateAddedSorting: ",
      dateAddedSorting,
      " BEFORE: ",
      filteredRecipes,
    );
    if (dateAddedSorting === SORT_OPTIONS.DATE_ADDED.newToOld) {
      filteredRecipes.sort((a, b) => a["Date Added"] - b["Date Added"]);
    } else if (dateAddedSorting === SORT_OPTIONS.DATE_ADDED.oldToNew) {
      filteredRecipes.sort((a, b) => b["Date Added"] - a["Date Added"]);
    }
    console.log(
      "dateAddedSorting: ",
      dateAddedSorting,
      " AFTER: ",
      filteredRecipes,
    );
  }

  return filteredRecipes;
}
