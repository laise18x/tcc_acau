CREATE DATABASE  IF NOT EXISTS `acau` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `acau`;

DROP TABLE IF EXISTS `aluno`;
CREATE TABLE `aluno` (
  `id_aluno` int NOT NULL AUTO_INCREMENT,
  `rg` int DEFAULT NULL,
  `nome_social` varchar(45) NOT NULL,
  `senha` varchar(10) NOT NULL,
  `status` varchar(25) NOT NULL,
  PRIMARY KEY (`id_aluno`),
  UNIQUE KEY `id_aluno` (`id_aluno`),
  UNIQUE KEY `rg` (`rg`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3;

DROP TABLE IF EXISTS `aluno_aluno`;
CREATE TABLE `aluno_aluno` (
  `id_aluno` int NOT NULL,
  UNIQUE KEY `id_aluno` (`id_aluno`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3;

DROP TABLE IF EXISTS `aluno_forum`;
CREATE TABLE `aluno_forum` (
  `topico` varchar(20) NOT NULL,
  `id_aluno` int NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3;

DROP TABLE IF EXISTS `aluno_professor`;
CREATE TABLE `aluno_professor` (
  `id_aluno` int NOT NULL,
  `id_professor` int NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3;

DROP TABLE IF EXISTS `categoria`;
CREATE TABLE `categoria` (
  `id_categoria` int NOT NULL AUTO_INCREMENT,
  `nome_categ` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id_categoria`),
  UNIQUE KEY `id_categoria` (`id_categoria`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3;

DROP TABLE IF EXISTS `categoria_forum`;
CREATE TABLE `categoria_forum` (
  `topico` varchar(20) NOT NULL,
  `id_categoria` int NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3;

DROP TABLE IF EXISTS `denuncia`;
CREATE TABLE `denuncia` (
  `id_denuncia` int NOT NULL AUTO_INCREMENT,
  `autor_denun` varchar(20) DEFAULT NULL,
  `dia_denun` date DEFAULT NULL,
  `hora_denun` datetime DEFAULT NULL,
  `justificativa` varchar(500) NOT NULL,
  `postagem` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_denuncia`),
  UNIQUE KEY `id_denuncia` (`id_denuncia`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3;

DROP TABLE IF EXISTS `disciplina`;
CREATE TABLE `disciplina` (
  `id_disciplina` int NOT NULL AUTO_INCREMENT,
  `nome_disciplina` varchar(45) NOT NULL,
  `nota_disciplina` varchar(45) NOT NULL,
  PRIMARY KEY (`id_disciplina`),
  UNIQUE KEY `id_disciplina` (`id_disciplina`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3;

DROP TABLE IF EXISTS `forum`;
CREATE TABLE `forum` (
  `topico` varchar(20) NOT NULL,
  `tipos_de_forum` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`topico`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3;

DROP TABLE IF EXISTS `instituicao`;
CREATE TABLE `instituicao` (
  `id_instituicao` int NOT NULL AUTO_INCREMENT,
  `telefone` int NOT NULL,
  `endereco` varchar(45) NOT NULL,
  `nome_instituicao` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `cursus` varchar(45) NOT NULL,
  PRIMARY KEY (`id_instituicao`),
  UNIQUE KEY `id_instituicao` (`id_instituicao`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3;

DROP TABLE IF EXISTS `instituicao_disciplina`;
CREATE TABLE `instituicao_disciplina` (
  `id_instituicao` int NOT NULL,
  `id_disciplina` int NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3;

DROP TABLE IF EXISTS `p_banidas`;
CREATE TABLE `p_banidas` (
  `id_banidas` int NOT NULL AUTO_INCREMENT,
  `nome_p_bani` varchar(20) DEFAULT NULL,
  `quantidade` int DEFAULT NULL,
  PRIMARY KEY (`id_banidas`),
  UNIQUE KEY `id_banidas` (`id_banidas`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3;

DROP TABLE IF EXISTS `palavras_banidas`;
CREATE TABLE `palavras_banidas` (
  `id_PalavrasBanidas` int NOT NULL,
  `nome_Pbanidas` varchar(25) NOT NULL,
  PRIMARY KEY (`id_PalavrasBanidas`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

DROP TABLE IF EXISTS `postagem`;
CREATE TABLE `postagem` (
  `id_postagem` int NOT NULL AUTO_INCREMENT,
  `tipo_forum` varchar(20) DEFAULT NULL,
  `dia` date DEFAULT NULL,
  `hora` datetime DEFAULT NULL,
  `autor` varchar(20) DEFAULT NULL,
  `anonimato` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id_postagem`),
  UNIQUE KEY `id_postagem` (`id_postagem`),
  UNIQUE KEY `tipo_forum` (`tipo_forum`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3;

DROP TABLE IF EXISTS `postagem_denuncia`;
CREATE TABLE `postagem_denuncia` (
  `tipo_forum` varchar(20) NOT NULL,
  `id_postagem` int NOT NULL,
  `id_denuncia` int DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3;

DROP TABLE IF EXISTS `postagem_p_banidas`;
CREATE TABLE `postagem_p_banidas` (
  `tipo_forum` varchar(20) DEFAULT NULL,
  `id_postagem` int NOT NULL,
  `id_banidas` int NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3;

DROP TABLE IF EXISTS `professor`;
CREATE TABLE `professor` (
  `id_professor` varchar(45) NOT NULL,
  `nome_prof` varchar(45) NOT NULL,
  `nota_prof` int DEFAULT NULL,
  `instituicao_prof` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_professor`),
  UNIQUE KEY `in_professor` (`id_professor`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3;

DROP TABLE IF EXISTS `professor_disciplina`;
CREATE TABLE `professor_disciplina` (
  `id_professor` int NOT NULL,
  `id_disciplina` int NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3;

DROP TABLE IF EXISTS `relatorio`;
CREATE TABLE `relatorio` (
  `id_relatorio` int NOT NULL AUTO_INCREMENT,
  `data_emissao` date DEFAULT NULL,
  `hora_emissao` datetime DEFAULT NULL,
  PRIMARY KEY (`id_relatorio`),
  UNIQUE KEY `id_relatorio` (`id_relatorio`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3;

