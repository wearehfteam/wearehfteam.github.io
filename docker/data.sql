
CREATE DATABASE flash_card;

use flash_card;

CREATE TABLE `account` (
  `username` varchar(255),
  `password` varchar(255),
  PRIMARY KEY (`userName`)
) ;

CREATE TABLE `decks` (
  `id` varchar(255),
  `name` varchar(255),
  `image` varchar(255),
  PRIMARY KEY (`id`)
) ;

CREATE TABLE `questions` (
  `id` varchar(255),
  `deck` varchar(255),
  `english` varchar(255),
  `vietnamese` varchar(255),
   `info` varchar(255),
  PRIMARY KEY (`id`),
  foreign key  (deck) references decks(id)
) ;

INSERT INTO `flash_card`.`account` (`userName`, `password`) VALUES ('huy', '123');
INSERT INTO `flash_card`.`account` (`userName`, `password`) VALUES ('loc', '1');
INSERT INTO `flash_card`.`account` (`userName`, `password`) VALUES ('tien', '123');
INSERT INTO `flash_card`.`account` (`userName`, `password`) VALUES ('son', '1');
INSERT INTO `flash_card`.`account` (`userName`, `password`) VALUES ('khang', '1');
INSERT INTO `flash_card`.`account` (`userName`, `password`) VALUES ('animal', '1');

INSERT INTO `flash_card`.`decks` (`id`, `name`, `image`) VALUES ('1', 'trái cây', ' https://image.thanhnien.vn/1080/uploaded/minhnguyet/2019_10_10/trai-cay_boqu.jpg');
INSERT INTO `flash_card`.`decks` (`id`, `name`, `image`) VALUES ('2', 'động vật', 'https://i.ytimg.com/vi/IStTGXckv0A/maxresdefault.jpg');
INSERT INTO `flash_card`.`decks` (`id`, `name`, `image`) VALUES ('3', 'cây cối', 'https://tiengtrunganhduong.com/Images/images/tu-vung-tieng-trung-chu-de-cay-coi.jpg');
INSERT INTO `flash_card`.`decks` (`id`, `name`, `image`) VALUES ('4', 'màu sắc', 'https://meovat9.com/wp-content/uploads/2013/07/Boi-tinh-yeu-thong-qu-mau-sac.png');

INSERT INTO `flash_card`.`questions` (`id`, `deck`, `english`, `vietnamese`, `info`) VALUES ('1', '1', 'apple', 'quả táo', 'a round fruit with shiny red or green skin that is fairly hard and white inside');
INSERT INTO `flash_card`.`questions` (`id`, `deck`, `english`, `vietnamese`, `info`) VALUES ('2', '1', 'orange', 'quả cam', 'a round citrus fruit with thick skin of a colour between red and yellow and a lot of sweet juice');
INSERT INTO `flash_card`.`questions` (`id`, `deck`, `english`, `vietnamese`, `info`) VALUES ('3', '1', 'banana', 'quả chuối', 'a long curved fruit with a thick yellow skin and that is soft inside, which grows on trees in hot countries');
INSERT INTO `flash_card`.`questions` (`id`, `deck`, `english`, `vietnamese`, `info`) VALUES ('4', '1', 'strawberry', 'dâu tây', 'a soft red fruit with very small yellow seeds on the surface, that grows on a low plant');
INSERT INTO `flash_card`.`questions` (`id`, `deck`, `english`, `vietnamese`, `info`) VALUES ('5', '1', 'tomato', 'cà chua', 'a soft fruit with a lot of juice and shiny red skin that is eaten as a vegetable either raw or cooked');
INSERT INTO `flash_card`.`questions` (`id`, `deck`, `english`, `vietnamese`, `info`) VALUES ('6', '1', 'pear', 'quả lê', 'a yellow or green fruit that is narrow at the top and wide at the bottom');
INSERT INTO `flash_card`.`questions` (`id`, `deck`, `english`, `vietnamese`, `info`) VALUES ('7', '1', 'avocado', 'quả bơ', 'a tropical fruit with hard, dark green skin and a soft, light green inside part that does not taste sweet and contains a large seed');
INSERT INTO `flash_card`.`questions` (`id`, `deck`, `english`, `vietnamese`, `info`) VALUES ('8', '1', 'peach', 'quả đào', ' a round fruit with soft red and yellow skin, that is yellow inside with a large rough seed');
INSERT INTO `flash_card`.`questions` (`id`, `deck`, `english`, `vietnamese`, `info`) VALUES ('9', '1', 'watermelon', 'quả dưa hấu', '​a type of large melon, with hard, dark-green skin, that is red inside and has black seeds');
INSERT INTO `flash_card`.`questions` (`id`, `deck`, `english`, `vietnamese`, `info`) VALUES ('10', '1', 'coconut', 'quả dừa', 'the large nut of a tropical tree called a coconut palm. It grows inside a hard shell and contains a soft white substance that can be eaten and juice that can be drunk');
INSERT INTO `flash_card`.`questions` (`id`, `deck`, `english`, `vietnamese`, `info`) VALUES ('11', '2', 'cat', 'con mèo', 'a small animal with soft fur that people often keep as a pet. Cats catch and kill birds and mice');
INSERT INTO `flash_card`.`questions` (`id`, `deck`, `english`, `vietnamese`, `info`) VALUES ('12', '2', 'mouse', 'con chuột', 'a small animal that is covered in fur and has a long thin tail. Mice live in fields, in people’s houses or where food is stored.');
INSERT INTO `flash_card`.`questions` (`id`, `deck`, `english`, `vietnamese`, `info`) VALUES ('13', '2', 'dog', 'con chó', 'an animal with four legs and a tail, often kept as a pet or trained for work, for example hunting or guarding buildings. There are many types of dog, some of which are wild.');
INSERT INTO `flash_card`.`questions` (`id`, `deck`, `english`, `vietnamese`, `info`) VALUES ('14', '2', 'elephant', 'con voi', '​a very large animal with thick grey skin, large ears, two curved outer teeth called tusks and a long nose called a trunk. There are two types of elephant, the African and the Asian.');
INSERT INTO `flash_card`.`questions` (`id`, `deck`, `english`, `vietnamese`, `info`) VALUES ('15', '2', 'tiger', 'con hổ', '​a large wild animal of the cat family that has orange fur with black stripes (= narrow lines) and lives in parts of Asia');
INSERT INTO `flash_card`.`questions` (`id`, `deck`, `english`, `vietnamese`, `info`) VALUES ('16', '2', 'bird', 'con chim', 'creature that is covered with feathers and has two wings and two legs. Most birds can fly');
INSERT INTO `flash_card`.`questions` (`id`, `deck`, `english`, `vietnamese`, `info`) VALUES ('17', '2', 'pig', 'con heo', 'an animal with pink, black or brown skin, short legs, a broad nose and a short curly tail. Pigs are kept on farms for their meat (called pork) or live in the wild.');
INSERT INTO `flash_card`.`questions` (`id`, `deck`, `english`, `vietnamese`, `info`) VALUES ('18', '2', 'chicken', 'con gà', 'a large bird that is often kept for its eggs or meat');
INSERT INTO `flash_card`.`questions` (`id`, `deck`, `english`, `vietnamese`, `info`) VALUES ('19', '2', 'duck', 'con vịt', 'a common bird that lives on or near water and has short legs, webbed feet (= feet with thin pieces of skin between the toes) and a wide beak. There are many types of duck, some of which are kept for their meat or eggs.');
INSERT INTO `flash_card`.`questions` (`id`, `deck`, `english`, `vietnamese`, `info`) VALUES ('20', '2', 'dragon', 'con rồng', 'a large aggressive animal with wings and a long tail, that can breathe out fire');
INSERT INTO `flash_card`.`questions` (`id`, `deck`, `english`, `vietnamese`, `info`) VALUES ('21', '3', 'apple tree', 'cây táo', 'a tree have apple');
INSERT INTO `flash_card`.`questions` (`id`, `deck`, `english`, `vietnamese`, `info`) VALUES ('22', '3', 'beech', 'cây sồi', 'a tall forest tree with smooth grey bark, shiny leaves and small nuts');
INSERT INTO `flash_card`.`questions` (`id`, `deck`, `english`, `vietnamese`, `info`) VALUES ('23', '3', 'birch', 'cây gỗ bulo', 'a tree with smooth bark and thin branches, that grows in northern countries');
INSERT INTO `flash_card`.`questions` (`id`, `deck`, `english`, `vietnamese`, `info`) VALUES ('24', '3', 'bracken', 'cây dương xỉ', 'a wild plant with large leaves that grows thickly on hills and in woods and turns brown in the autumn');
INSERT INTO `flash_card`.`questions` (`id`, `deck`, `english`, `vietnamese`, `info`) VALUES ('25', '3', 'brambles', 'cây mâm xôi', 'a wild bush with thorns on which blackberries grow');
INSERT INTO `flash_card`.`questions` (`id`, `deck`, `english`, `vietnamese`, `info`) VALUES ('26', '3', 'bush', 'bụi rậm', 'a plant that grows thickly with several hard stems coming up from the root');
INSERT INTO `flash_card`.`questions` (`id`, `deck`, `english`, `vietnamese`, `info`) VALUES ('27', '3', 'cactus', 'cây xương rồng', '​a plant that grows in hot dry regions, especially one with thick stems covered in spines but without leaves. There are many different types of cactus.');
INSERT INTO `flash_card`.`questions` (`id`, `deck`, `english`, `vietnamese`, `info`) VALUES ('28', '3', 'cedar', 'cây tuyết tùng', 'a tall evergreen tree with wide spreading branches');
INSERT INTO `flash_card`.`questions` (`id`, `deck`, `english`, `vietnamese`, `info`) VALUES ('29', '3', 'cherry tree', 'cây anh đào', 'a small soft round fruit with shiny red or black skin and a large seed inside');
INSERT INTO `flash_card`.`questions` (`id`, `deck`, `english`, `vietnamese`, `info`) VALUES ('30', '3', 'coconut tree', 'cây dừa', 'the large tree with coconut');
INSERT INTO `flash_card`.`questions` (`id`, `deck`, `english`, `vietnamese`, `info`) VALUES ('31', '4', 'white', 'màu trắng', ' having the colour of fresh snow or of milk');
INSERT INTO `flash_card`.`questions` (`id`, `deck`, `english`, `vietnamese`, `info`) VALUES ('32', '4', 'blue', 'màu xanh', 'having the colour of a clear sky or the sea on a clear day');
INSERT INTO `flash_card`.`questions` (`id`, `deck`, `english`, `vietnamese`, `info`) VALUES ('33', '4', 'green', 'màu xanh lá cây', 'having the colour of grass or the leaves of most plants and trees');
INSERT INTO `flash_card`.`questions` (`id`, `deck`, `english`, `vietnamese`, `info`) VALUES ('34', '4', 'red', 'màu đỏ', ' having the colour of blood or fire');
INSERT INTO `flash_card`.`questions` (`id`, `deck`, `english`, `vietnamese`, `info`) VALUES ('35', '4', 'pink', 'màu hồng', 'pale red in colour');
INSERT INTO `flash_card`.`questions` (`id`, `deck`, `english`, `vietnamese`, `info`) VALUES ('36', '4', 'yellow', 'màu vàng', 'having the colour of lemons or butter');
INSERT INTO `flash_card`.`questions` (`id`, `deck`, `english`, `vietnamese`, `info`) VALUES ('37', '4', 'black', 'màu đen', 'having the very darkest colour, like coal or the sky at night');
INSERT INTO `flash_card`.`questions` (`id`, `deck`, `english`, `vietnamese`, `info`) VALUES ('38', '4', 'brown', 'màu nâu', 'having the colour of earth or coffee');
INSERT INTO `flash_card`.`questions` (`id`, `deck`, `english`, `vietnamese`, `info`) VALUES ('39', '4', 'gray', 'màu xám', 'having the colour of smoke or ashes');
INSERT INTO `flash_card`.`questions` (`id`, `deck`, `english`, `vietnamese`, `info`) VALUES ('40', '4', 'orange', 'màu cam', 'a bright colour between red and yellow');
