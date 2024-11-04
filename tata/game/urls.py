from ninja import NinjaAPI, ModelSchema, Schema
from game.models import Game, Player
from game.services import create_games, get_players

api = NinjaAPI()

class GameSchema(ModelSchema):
    class Meta:
        model = Game
        fields = ["name", "turn", "ended"]

class PlayerSchema(ModelSchema):
    class Meta:
        model = Player
        fields = ["name", "score"]

class GameInfo(Schema):
    game: GameSchema
    players: list[PlayerSchema]

class AddGameSchema(Schema):
    name: str
    players: list[str]

class AddPlayerSchema(Schema):
    name: str

@api.post("/create_games", response=GameSchema)
def add(request, game: AddGameSchema):
    return create_games(game.name, game.players)
    #return Game.objects.create(name=game.name)

@api.get("/player/{player_id}", response=PlayerSchema)
def get_player(request, player_id: int):
    return Player.objects.get(pk=player_id)

@api.get("/game/{game_id}", response=GameInfo)
def get_game(request, game_id: int):
    g = Game.objects.get(pk=game_id)
    p = get_players(game_id)
    return {"game": g, "players": p}






