from ninja import NinjaAPI, ModelSchema, Schema
from game.models import Game, Player
from game.services import create_games, get_players

api = NinjaAPI()

class PlayerSchema(ModelSchema):
    class Meta:
        model = Player
        fields = ["id","name", "score"]

class GameSchema(ModelSchema):
    class Meta:
        model = Game
        fields = ["id", "name", "turn", "ended"]
    players: list[PlayerSchema]

#class GameInfo(Schema):
#    game: GameSchema
#    players: list[PlayerSchema]

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

@api.get("/game/{game_id}", response=GameSchema)
def get_game(request, game_id: int):
    g = Game.objects.get(pk=game_id)
    return g






