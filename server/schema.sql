-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema shopManager
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema shopManager
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `shopManager` DEFAULT CHARACTER SET utf8 ;
USE `shopManager` ;

-- -----------------------------------------------------
-- Table `shopManager`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `shopManager`.`users` (
  `idusers` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(255) NULL,
  `admin` TINYINT NULL DEFAULT 0,
  `adress` VARCHAR(255) NULL,
  PRIMARY KEY (`idusers`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `shopManager`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `shopManager`.`products` (
  `idproducts` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `category` VARCHAR(45) NULL,
  `price` INT NULL,
  `quantity` INT NULL,
  `description` VARCHAR(255) NULL,
  `imageUrl` VARCHAR(255) NULL,
  `productType` VARCHAR(45) NULL,
  PRIMARY KEY (`idproducts`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `shopManager`.`basket`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `shopManager`.`basket` (
  `users_idusers` INT NOT NULL,
  `products_idproducts` INT NOT NULL,
  `idbasket` INT NOT NULL AUTO_INCREMENT,
  INDEX `fk_basket_users_idx` (`users_idusers` ASC) VISIBLE,
  INDEX `fk_basket_products1_idx` (`products_idproducts` ASC) VISIBLE,
  PRIMARY KEY (`idbasket`),
  CONSTRAINT `fk_basket_users`
    FOREIGN KEY (`users_idusers`)
    REFERENCES `shopManager`.`users` (`idusers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_basket_products1`
    FOREIGN KEY (`products_idproducts`)
    REFERENCES `shopManager`.`products` (`idproducts`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `shopManager`.`reviews`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `shopManager`.`reviews` (
  `users_idusers` INT NOT NULL,
  `products_idproducts` INT NOT NULL,
  `body` VARCHAR(255) NULL,
  `imageUrl` VARCHAR(255) NULL,
  `reviews_id` INT NOT NULL AUTO_INCREMENT,
  INDEX `fk_reviews_users1_idx` (`users_idusers` ASC) VISIBLE,
  INDEX `fk_reviews_products1_idx` (`products_idproducts` ASC) VISIBLE,
  PRIMARY KEY (`reviews_id`),
  CONSTRAINT `fk_reviews_users1`
    FOREIGN KEY (`users_idusers`)
    REFERENCES `shopManager`.`users` (`idusers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_reviews_products1`
    FOREIGN KEY (`products_idproducts`)
    REFERENCES `shopManager`.`products` (`idproducts`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


INSERT INTO products (name, category, price, quantity, description, imageUrl, productType)
VALUES
  ('Urban Decay Naked3 Eyeshadow Palette', 'Makeup', 54.00, 18, 'A rose-hued eyeshadow palette with versatile shades for creating romantic looks.', 'https://di2ponv0v5otw.cloudfront.net/posts/2023/12/03/656d5a5c9464f3decdbb7f9b/m_656d5ab1308f07afcb4b9e7a.jpg', 'Eye'),
  ('La Mer Crème de la Mer Moisturizing Cream', 'Skincare', 185.00, 8, 'An ultra-rich moisturizing cream that deeply hydrates and rejuvenates the skin.', 'https://tse4.mm.bing.net/th?id=OIP.3zSMxeiliodyJUf0sBg1FwHaLW&pid=Api&P=0&h=220', 'Moisturizer'),
  ('Dior Sauvage Eau de Toilette', 'Fragrance', 95.00, 14, 'A fresh and spicy fragrance with notes of bergamot, pepper, and vanilla.', 'https://www.nocibe.fr/bibliotheque/produits/DIOR/204337_dior_sauvage_eau_de_toilette_eau_de_toilette_60ml_packaging_1000x1000.jpg', 'Men');


INSERT INTO products (name, category, price, quantity, description, imageUrl, productType)
VALUES
  ('Too Faced Better Than Sex Mascara', 'Makeup', 26.00, 25, 'A volumizing mascara for intense black lashes with a dramatic curl.', 'https://blogit-cdn.a-lehdet.fi/uploads/sites/69/2017/02/too-faced-better-than-sex-mascara-1-6.jpg', 'Eye'),
  ('GlamGlow Supermud Clearing Treatment', 'Skincare', 59.00, 15, 'A facial mask that helps clear and prevent breakouts for a clearer complexion.', 'https://tse4.mm.bing.net/th?id=OIP.UUDQ23joN7oA3uHWmPPF3gHaE7&pid=Api&P=0&h=220', 'Mask'),
  ('Marc Jacobs Daisy Eau de Toilette', 'Fragrance', 84.00, 20, 'A floral and feminine fragrance with notes of wild berries and jasmine.', 'https://tse2.mm.bing.net/th?id=OIP.ZGzmvpMEzT6z0xPFYU5mLAHaHa&pid=Api&P=0&h=220', 'Women');





INSERT INTO products (name, category, price, quantity, description, imageUrl, productType)
VALUES
  ('Anastasia Beverly Hills Dipbrow Pomade', 'Makeup', 21.00, 30, 'A waterproof and smudge-proof eyebrow pomade for defined and sculpted brows.', 'https://tse1.mm.bing.net/th?id=OIP.n2nNWuS01rm7zUCeuPm0HQHaE8&pid=Api&P=0&h=220', 'Eye'),
  ('Caudalie Beauty Elixir', 'Skincare', 49.00, 12, 'A refreshing facial mist that tones and sets makeup while providing a radiant glow.', 'https://tse2.mm.bing.net/th?id=OIP.4nSb_y7rQ4yHmQVFKj1b1QHaI7&pid=Api&P=0&h=220', 'Moisturizer'),
  ('Giorgio Armani Acqua Di Gioia Eau de Parfum', 'Fragrance', 72.00, 16, 'A fresh and aquatic fragrance with notes of mint, lemon, and jasmine.', 'https://tse2.mm.bing.net/th?id=OIP.2HHs47SOB--qs01Id4f24QHaHa&pid=Api&P=0&h=220', 'Women');