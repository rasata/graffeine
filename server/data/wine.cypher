CREATE (fruity_red:Quality {qualifier:'Fruity Red'})
CREATE (dry_white:Quality {qualifier:'Dry White'})
CREATE (sweet_white:Quality {qualifier:'Sweet White'})
CREATE (white_sparkling:Quality {qualifier:'White Sparkling'})
CREATE (red_sparkling:Quality {qualifier:'Red Sparkling'})
CREATE (red1:Red {name:'Pinot Noir'})-[:IS]->(fruity_red)
CREATE (red2:Red {name:'Cabernet Sauvignon'})-[:IS]->(fruity_red)
CREATE (red3:Red {name:'Merlot'})-[:IS]->(fruity_red)
CREATE (red4:Red {name:'Syrah'})-[:IS]->(fruity_red)
CREATE (red5:Red {name:'Zinfandel'})-[:IS]->(fruity_red)
CREATE (red6:Red {name:'Sangiovese'})-[:IS]->(fruity_red)
CREATE (red7:Red {name:'Malbec'})-[:IS]->(fruity_red)
CREATE (red9:Red {name:'Grenache'})-[:IS]->(fruity_red)
CREATE (red10:Red {name:'Gamay'})-[:IS]->(fruity_red)
CREATE (red11:Red {name:'Cabernet Franc'})-[:IS]->(fruity_red)
CREATE (white1:White {name:'Chardonnay'})-[:IS]->(dry_white)
CREATE (white2:White {name:'Chenin Blanc'})-[:IS]->(dry_white)
CREATE (white3:White {name:'Gewurztraminer'})-[:IS]->(sweet_white)
CREATE (white4:White {name:'Riesling'})-[:IS]->(sweet_white)
CREATE (white5:White {name:'Sauvignon Blanc'})-[:IS]->(dry_white)
CREATE (white6:White {name:'Semillon'})-[:IS]->(dry_white)
CREATE (white7:White {name:'Pinot Gris'})-[:IS]->(dry_white)
CREATE (white8:White {name:'Viognier'})-[:IS]->(dry_white)
CREATE (white9:White {name:'Gruner Veltliner'})-[:IS]->(dry_white)
CREATE (rose1:Rose {name:'Rose'})
CREATE (sparkling1:Sparkling {name:'Champagne'})-[:IS]->(white_sparkling)
CREATE (sparkling2:Sparkling {name:'Cava'})-[:IS]->(white_sparkling)
CREATE (sparkling3:Sparkling {name:'Prosecco'})-[:IS]->(white_sparkling)
CREATE (sparkling4:Sparkling {name:'Lambrusco'})-[:IS]->(red_sparkling)
