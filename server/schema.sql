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


-- -----------------------------------------------------
-- Table `shopManager`.`admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `shopManager`.`admin` (
  `idadmin` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NULL,
  `password` VARCHAR(255) NULL,
  PRIMARY KEY (`idadmin`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
