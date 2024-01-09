interface Recipe {
  title: string;
  subtitle: string;
  image: string;
  instructions: string;
  cooktime: number;
  mains: string;
  sides: string;
  ingredients: string;
  rating: number;
  meatTypes: string;
  vegetableTypes: string;
  numPots: number;
  numPans: number;
  bakingSheets: number;
  specialReqs: string;
  dateAdded: number;
}

export const recipeData: Recipe[] = [
  {
    title: "Beef ’n’ Baked-In Veg Mini Meatloaves",
    subtitle: "with Rice & Roasted Grana Padano Carrots",
    image:
      "https://drive.google.com/uc?export=view&id=1PapyYYqCOcVToiNyGvlaVcF4NQsJCRAg",
    instructions:
      "https://drive.google.com/uc?export=view&id=1oqwBATvKGCOCQE0ih79fld5Y0z_uqgw2",
    cooktime: 20,
    mains: "Meatloaf",
    sides: "Rice,Carrots",
    ingredients:
      "Lean Ground Beef - 170 - g,Nantes Carrots - 200 - g,Zucchini - 1 - na,Panko - 20 - g,White Rice - 106 - g,Tomato Sauce - 133 - mL,Grana Padano - 9 - g",
    rating: 6,
    meatTypes: "Meatloaf",
    vegetableTypes: "Carrots,Zucchini",
    numPots: 0,
    numPans: 1,
    bakingSheets: 2,
    specialReqs: "Rice Cooker",
    dateAdded: 1704477339739,
  },
];
