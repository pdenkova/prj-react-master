import FavoriteButton from "./FavoriteButton";

function RecipeListItem ({recipe}) {

    return (
        <> 
    <div className="d-flex justify-content-between mb-2">
        <img className="recipe-image" 
        src={recipe.image} alt={recipe.title}/>
        <div className="px-2">
            <div className="d-flex">
                <div>
                <div className="fw-bold recipe-title mt-2">{recipe.title}</div>
                <FavoriteButton recipe = {recipe}/>
                <div className="recipe-description mt-5"> <p><em>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Ut sagittis ullamcorper efficitur. 
                    Cras hendrerit placerat tortor, et suscipit velit efficitur at.
                    In eu pharetra nulla. Sed scelerisque est laoreet bibendum volutpat.
                     Cras in ipsum id sapien posuere fringilla. Duis in efficitur est. 
                     Vestibulum placerat tempus leo quis malesuada.</em></p></div>
                </div>
            </div>
        </div>
    </div>
    <hr className="my-2"></hr>
    </>
    )
}
export default RecipeListItem;