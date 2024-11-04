from game.models import Game, Player

def create_games(G_name: str, P_names: list[str]):
    game = Game.objects.create(name=G_name)

    for name in P_names:
        Player.objects.create(name=name, game=game)
    return game

def get_players(game_id):
    game = Game.objects.get(pk=game_id)
    players = game.players.all()
    return players

def change_score(player_id, score):
    player = Player.objects.get(pk=player_id)
    player.score = score
    player.save()
    return player

def get_winners():
    pass


