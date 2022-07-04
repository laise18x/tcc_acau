-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 16-Jun-2022 às 21:50
-- Versão do servidor: 10.4.24-MariaDB
-- versão do PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `acau`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `aluno`
--

CREATE TABLE `aluno` (
  `idaluno` int(11) NOT NULL,
  `rg` varchar(16) NOT NULL,
  `senha` varchar(22) NOT NULL,
  `nome` varchar(45) NOT NULL,
  `sta` varchar(20) DEFAULT 'online',
  `carg_al` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `aluno`
--

INSERT INTO `aluno` (`idaluno`, `rg`, `senha`, `nome`, `sta`, `carg_al`) VALUES
(1485663, '7878878', '786786a@er', 'Ana', 'online', 'none');

-- --------------------------------------------------------

--
-- Estrutura da tabela `aluno_forum`
--

CREATE TABLE `aluno_forum` (
  `topico` varchar(20) NOT NULL,
  `idaluno` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `aluno_p`
--

CREATE TABLE `aluno_p` (
  `idaluno` int(11) NOT NULL,
  `id_prof` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `disciplina`
--

CREATE TABLE `disciplina` (
  `id_disc` int(11) NOT NULL,
  `nome_disc` varchar(45) DEFAULT NULL,
  `nota_disc` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `forum`
--

CREATE TABLE `forum` (
  `topico` varchar(20) NOT NULL,
  `tforum` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `instituicao`
--

CREATE TABLE `instituicao` (
  `id_instituicao` int(11) NOT NULL,
  `nome_ins` varchar(45) DEFAULT NULL,
  `endereco` varchar(45) DEFAULT NULL,
  `tel` varchar(13) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `palavras_banidas`
--

CREATE TABLE `palavras_banidas` (
  `id_PalavrasBanidas` int(11) NOT NULL,
  `nome_Pbanidas` varchar(200) DEFAULT NULL,
  `Nome_correto` varchar(200) DEFAULT '------'
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COMMENT='armazena filtros de palavras';

-- --------------------------------------------------------

--
-- Estrutura da tabela `postagem`
--

CREATE TABLE `postagem` (
  `id_post` int(11) NOT NULL,
  `dia` date NOT NULL,
  `autor` varchar(20) NOT NULL,
  `tforum` varchar(20) NOT NULL,
  'post' varchar(240) NOT NULL,
  'tag' varchar(45) NOT NULL,
 'titulo' varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `professor`
--

CREATE TABLE `professor` (
  `id_prof` int(11) NOT NULL,
  `nome_p` varchar(45) DEFAULT NULL,
  `nota_p` varchar(45) DEFAULT NULL,
  `id_instituicao` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `relatorio`
--

CREATE TABLE `relatorio` (
  `id_rel` int(11) NOT NULL,
  `data_em` date DEFAULT NULL,
  `hora_emissao` datetime DEFAULT NULL,
  `id_prof` int(11) DEFAULT NULL,
  `id_disc` int(11) DEFAULT NULL,
  `id_aluno` varchar(20) DEFAULT NULL,
  `idaluno` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `aluno`
--
ALTER TABLE `aluno`
  ADD PRIMARY KEY (`idaluno`),
  ADD UNIQUE KEY `rg` (`rg`);

--
-- Índices para tabela `aluno_forum`
--
ALTER TABLE `aluno_forum`
  ADD KEY `fk_a` (`idaluno`),
  ADD KEY `fk_topico` (`topico`);

--
-- Índices para tabela `disciplina`
--
ALTER TABLE `disciplina`
  ADD PRIMARY KEY (`id_disc`),
  ADD UNIQUE KEY `id_disc` (`id_disc`);

--
-- Índices para tabela `forum`
--
ALTER TABLE `forum`
  ADD PRIMARY KEY (`topico`),
  ADD KEY `tforum` (`tforum`);

--
-- Índices para tabela `instituicao`
--
ALTER TABLE `instituicao`
  ADD PRIMARY KEY (`id_instituicao`),
  ADD UNIQUE KEY `id_instituicao` (`id_instituicao`);

--
-- Índices para tabela `palavras_banidas`
--
ALTER TABLE `palavras_banidas`
  ADD PRIMARY KEY (`id_PalavrasBanidas`),
  ADD UNIQUE KEY `nome_Pbanidas` (`nome_Pbanidas`);

--
-- Índices para tabela `postagem`
--
ALTER TABLE `postagem`
  ADD PRIMARY KEY (`id_post`),
  ADD UNIQUE KEY `id_post` (`id_post`),
  ADD KEY `fk_forum` (`tforum`);

--
-- Índices para tabela `professor`
--
ALTER TABLE `professor`
  ADD PRIMARY KEY (`id_prof`),
  ADD UNIQUE KEY `id_prof` (`id_prof`),
  ADD KEY `fk_insti` (`id_instituicao`);

--
-- Índices para tabela `relatorio`
--
ALTER TABLE `relatorio`
  ADD PRIMARY KEY (`id_rel`),
  ADD KEY `fk_prof` (`id_prof`),
  ADD KEY `fk_disc` (`id_disc`),
  ADD KEY `fk_a` (`idaluno`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `aluno`
--
ALTER TABLE `aluno`
  MODIFY `idaluno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1485664;

--
-- AUTO_INCREMENT de tabela `disciplina`
--
ALTER TABLE `disciplina`
  MODIFY `id_disc` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `instituicao`
--
ALTER TABLE `instituicao`
  MODIFY `id_instituicao` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `palavras_banidas`
--
ALTER TABLE `palavras_banidas`
  MODIFY `id_PalavrasBanidas` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `postagem`
--
ALTER TABLE `postagem`
  MODIFY `id_post` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `professor`
--
ALTER TABLE `professor`
  MODIFY `id_prof` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `relatorio`
--
ALTER TABLE `relatorio`
  MODIFY `id_rel` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `aluno_forum`
--
ALTER TABLE `aluno_forum`
  ADD CONSTRAINT `fk_a` FOREIGN KEY (`idaluno`) REFERENCES `aluno` (`idaluno`),
  ADD CONSTRAINT `fk_topico` FOREIGN KEY (`topico`) REFERENCES `forum` (`topico`);

--
-- Limitadores para a tabela `postagem`
--
ALTER TABLE `postagem`
  ADD CONSTRAINT `fk_forum` FOREIGN KEY (`tforum`) REFERENCES `forum` (`tforum`);

--
-- Limitadores para a tabela `professor`
--
ALTER TABLE `professor`
  ADD CONSTRAINT `fk_insti` FOREIGN KEY (`id_instituicao`) REFERENCES `instituicao` (`id_instituicao`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
